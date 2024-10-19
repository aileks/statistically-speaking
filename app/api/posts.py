from typing import Union

from flask import Blueprint, request
from flask_login import current_user

from app.models import db, Post, Save, Graph, Comment
from app.upload import upload_file_to_s3, remove_file_from_s3
from app.utils import get_data, check_data

posts = Blueprint("posts", __name__)


@posts.route("")
def get_posts() -> list[dict[str, str]]:
    try:
        all_posts: list[Post] = Post.query.order_by(
            Post.created_at.desc(), Post.id.desc()
        ).all()
    except Exception as e:
        print(f"\n\n\nError fetching posts: {e}\n\n\n")
        return []
    return [post.to_dict() for post in all_posts]


@posts.route("/<int:post_id>")
def post_by_id(post_id: int) -> Union[dict[str, str], tuple[dict[str, str], int]]:
    post: Post = Post.query.get(post_id)

    if not post:
        return {"error": "Post not found"}, 404

    post_data: dict[str, Union[int, str, list[dict], dict[str, list]]] = post.to_dict()
    graph: dict[str, Union[int, str]] = post.graph.to_dict()

    post_data["dataframe"] = get_data(graph)

    return post_data


@posts.route("", methods=["POST"])
def create_post():
    if not current_user:
        return {"error": "Unauthorized"}, 401

    title = request.form.get("title")
    body = request.form.get("body")
    graph_type = request.form.get("graph_type")
    x_axis = request.form.get("x_axis")
    y_axis = request.form.get("y_axis")
    csv_file = request.files.get("csv_file")

    if not title or not body or not csv_file or not x_axis or not y_axis:
        return {"message": "Missing required fields"}, 400

    if csv_file.filename.rsplit(".", 1)[1].lower() != "csv":
        return {"message": "File must be a CSV"}, 400

    # csv_file.filename = get_unique_filename(csv_file.filename)
    upload_res = upload_file_to_s3(csv_file)

    if "url" not in upload_res:
        return upload_res, 400

    new_post = Post(
        title=title,
        body=body,
        user_id=current_user.id,
    )

    new_graph = Graph(
        url=upload_res["url"],
        type=graph_type,
        x_axis=x_axis if x_axis else None,
        y_axis=y_axis if y_axis else None
    )

    try:
        db.session.add(new_post)
        db.session.flush()

        new_graph.post_id = new_post.id

        # graph_data_ok = check_data(new_graph)
        # if not graph_data_ok:
        #     db.session.rollback()
        #     return {"message": "Invalid data for bar/line graph"}, 400

        db.session.add(new_graph)
        db.session.commit()
    except Exception as e:
        db.session.rollback()
        return {"message": str(e)}, 500

    return new_post.to_dict()


@posts.route("<int:post_id>", methods=["PUT"])
def update_post(post_id: int) -> Union[dict[str, str], tuple[dict[str, str], int]]:
    updated_post: Post = Post.query.get(post_id)
    updated_graph: Graph = Graph.query.filter_by(post_id=post_id).first()

    if not updated_post:
        return {"error": "Post not found"}, 404

    if updated_post.user_id != current_user.id or not current_user:
        return {"error": "Unauthorized"}, 401

    updated_post.title = request.form.get("title")
    updated_post.body = request.form.get("body")
    updated_graph.type = request.form.get("graph_type")

    x_axis = request.form.get("x_axis")
    y_axis = request.form.get("y_axis")

    if (x_axis and y_axis):
        updated_graph.x_axis = x_axis
        updated_graph.y_axis = y_axis

    # graph_data_ok = check_data(updated_graph)
    # if not graph_data_ok:
    #     db.session.rollback()
    #     return {
    #         "message": "Graphs of type 'Bar' or 'Line' must have only two (2) columns"
    #     }, 400

    db.session.commit()

    return updated_post.to_dict()


@posts.route("/<int:post_id>", methods=["DELETE"])
def delete_post(post_id: int) -> Union[dict[str, str], tuple[dict[str, str], int]]:
    post: Post = Post.query.get(post_id)
    graph: Graph = Graph.query.filter_by(post_id=post_id).first()

    if not post:
        return {"error": "Post not found"}, 404

    if post.user_id != current_user.id or not current_user:
        return {"error": "Unauthorized"}, 401

    if graph.url:
        is_success = remove_file_from_s3(graph.url)
        if not is_success:
            return is_success, 500

    db.session.delete(graph)
    db.session.commit()
    db.session.delete(post)
    db.session.commit()

    return {"message": "Post deleted successfully"}


@posts.route("/<int:post_id>/save", methods=["POST"])
def save_post(post_id: int) -> Union[tuple[dict[str, str], int], list[dict[str, int]]]:
    post: Post = Post.query.get(post_id)
    save: Save = Save.query.filter_by(user_id=current_user.id, post_id=post_id).first()

    if save:
        return {"error": "Already saved"}, 400

    if not post:
        return {"error": "Post not found"}, 404

    if not current_user or post.user_id == current_user.id:
        return {"error": "Unauthorized"}, 401

    new_save: Save = Save(user_id=current_user.id, post_id=post_id)

    db.session.add(new_save)
    db.session.commit()

    return [save.to_dict() for save in current_user.saves]


@posts.route("/<int:post_id>/save", methods=["DELETE"])
def unsave_post(
    post_id: int,
) -> Union[tuple[dict[str, str], int], list[dict[str, int]]]:
    post: Post = Post.query.get(post_id)
    save: Save = Save.query.filter_by(user_id=current_user.id, post_id=post_id).first()

    if not post or not save:
        return {"error": "Not found"}, 404

    if not current_user or post.user_id == current_user.id:
        return {"error": "Unauthorized"}, 401

    db.session.delete(save)
    db.session.commit()

    return [save.to_dict() for save in current_user.saves]


@posts.route("/<int:post_id>/comments", methods=["POST"])
def add_comment(post_id: int) -> Union[dict[str, str], tuple[dict[str, str], int]]:
    if not current_user:
        return {"error": "Unauthorized"}, 401

    post: Post = Post.query.get(post_id)

    if not post:
        return {"error": "Post not found"}, 404

    body = request.form.get("comment_body")

    if not body:
        return {"message": "Missing required fields"}, 400

    new_comment = Comment(body=body, user_id=current_user.id, post_id=post_id)

    db.session.add(new_comment)
    db.session.commit()

    return new_comment.to_dict()
