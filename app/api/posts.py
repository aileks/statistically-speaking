from typing import Union

from flask import Blueprint, request
from flask_login import current_user

from app.models import db, Post, Save

posts = Blueprint("posts", __name__)


@posts.route("")
def get_posts() -> list[dict[str, str]]:
    all_posts: list[Post] = Post.query.order_by(
        Post.created_at.desc(), Post.id.desc()
    ).all()
    return [post.to_dict() for post in all_posts]


@posts.route("/<int:post_id>")
def post_by_id(post_id: int) -> Union[dict[str, str], tuple[dict[str, str], int]]:
    post: Post = Post.query.get(post_id)

    if not post:
        return {"error": "Post not found"}, 404

    return post.to_dict()


@posts.route("", methods=["POST"])
def update_post() -> Union[dict[str, str], tuple[dict[str, str], int]]:
    if not current_user:
        return {"error": "Unauthorized"}, 401

    new_post: Post = Post(
        title=request.form.get("title"),
        body=request.form.get("body"),
        user_id=current_user.id,
    )

    db.session.add(new_post)
    db.session.commit()

    return new_post.to_dict()


@posts.route("<int:post_id>", methods=["PUT"])
def create_post(post_id: int) -> Union[dict[str, str], tuple[dict[str, str], int]]:
    updated_post: Post = Post.query.get(post_id)

    if not updated_post:
        return {"error": "Post not found"}, 404

    if updated_post.user_id != current_user.id or not current_user:
        return {"error": "Unauthorized"}, 401

    updated_post.title = request.form.get("title")
    updated_post.body = request.form.get("body")

    db.session.add(updated_post)
    db.session.commit()

    return updated_post.to_dict()


@posts.route("/<int:post_id>", methods=["DELETE"])
def delete_post(post_id: int) -> Union[dict[str, str], tuple[dict[str, str], int]]:
    post: Post = Post.query.get(post_id)

    if not post:
        return {"error": "Post not found"}, 404

    if post.user_id != current_user.id or not current_user:
        return {"error": "Unauthorized"}, 401

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
