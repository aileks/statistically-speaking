import collections

from flask import Blueprint
from flask_login import login_required, current_user

from app.models import db, User, Post

user_routes = Blueprint("users", __name__)


@user_routes.route("/")
@login_required
def users():
    """
    Query for all users and returns them in a list of user dictionaries
    """
    users = User.query.all()
    return {"users": [user.to_dict() for user in users]}


@user_routes.route("/<int:id>")
def user(id):
    """
    Query for a user by id and returns that user in a dictionary
    """
    user = User.query.get(id)
    return user.to_dict()


@user_routes.route("/<int:id>/follow", methods=["POST"])
@login_required
def follow(id):
    user_to_follow = User.query.get(id)

    if current_user.is_following(user_to_follow):
        return {"message": "Already following"}, 400

    current_user.follow(user_to_follow)

    db.session.commit()
    return current_user.to_dict()


@user_routes.route("/<int:id>/follow", methods=["DELETE"])
@login_required
def unfollow(id):
    user_to_unfollow = User.query.get(id)

    if not current_user.is_following(user_to_unfollow):
        return {"errors": "User is not followed"}, 400

    current_user.unfollow(user_to_unfollow)

    db.session.commit()
    return current_user.to_dict()


@user_routes.route("/<int:id>/posts")
def user_posts(id):
    posts: collections.Iterable = (
        Post.query.filter(Post.user_id == id)
        .order_by(Post.created_at.desc(), Post.id.desc())
        .limit(3)
        .all()
    )
    return [post.to_dict() for post in posts]
