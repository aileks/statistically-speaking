from flask import Blueprint

from app.models import Post

posts = Blueprint("posts", __name__)


@posts.route("")
def get_posts() -> list[dict[str, str]]:
    all_posts: list[Post] = Post.query.all()
    return [post.to_dict() for post in all_posts]


@posts.route("/<int:post_id>")
def post_by_id(post_id: int) -> dict[str, str]:
    post: Post = Post.query.get(post_id)
    return post.to_dict()
