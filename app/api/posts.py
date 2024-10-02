from typing import Union

from flask import Blueprint, request
from flask_login import current_user

from app.models import db, Post

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
def create_post() -> Union[dict[str, str], tuple[dict[str, str], int]]:
    if not current_user:
        return {"error": "Unauthorized"}, 401

    new_post: Post = Post(
        title=request.get_json()["title"],
        body=request.get_json()["body"],
        user_id=current_user.id,
    )

    db.session.add(new_post)
    db.session.commit()

    return new_post.to_dict()


@posts.route("/<int:post_id>", methods=["DELETE"])
def delete_post(post_id: int) -> Union[dict[str, str], tuple[dict[str, str], int]]:
    post: Post = Post.query.get(post_id)

    if not post:
        return {"error": "Post not found"}, 404

    if post.user_id != current_user.id:
        return {"error": "Unauthorized"}, 401

    db.session.delete(post)
    db.session.commit()
    return {"message": "Post deleted successfully"}
