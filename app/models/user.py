from typing import Union

from flask_login import UserMixin
from sqlalchemy import Table
from werkzeug.security import generate_password_hash, check_password_hash

from . import Save, Comment, Post
from .db import db, environment, SCHEMA, add_prefix_for_prod

followers: Table = db.Table(
    "followers",
    db.Model.metadata,
    db.Column(
        "follower_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"))
    ),
    db.Column(
        "followed_id", db.Integer, db.ForeignKey(add_prefix_for_prod("users.id"))
    ),
    schema=SCHEMA if environment == "production" else None,
)


class User(db.Model, UserMixin):
    __tablename__ = "users"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(40), nullable=False, unique=True)
    first_name = db.Column(db.String(40), nullable=False)
    last_name = db.Column(db.String(40), nullable=False)
    bio = db.Column(db.Text)
    field = db.Column(db.String(40))
    email = db.Column(db.String(255), nullable=False, unique=True)
    hashed_password = db.Column(db.String(255), nullable=False)

    posts: list[Post] = db.relationship("Post", back_populates="user")
    saves: list[Save] = db.relationship("Save", back_populates="user")
    comments: list[Comment] = db.relationship(
        "Comment", back_populates="user", cascade="all, delete-orphan"
    )
    following = db.relationship(
        "User",
        secondary=followers,
        primaryjoin=(followers.c.follower_id == id),
        secondaryjoin=(followers.c.followed_id == id),
        back_populates="followers",
        lazy="dynamic",
    )
    followers = db.relationship(
        "User",
        secondary=followers,
        primaryjoin=(followers.c.followed_id == id),
        secondaryjoin=(followers.c.follower_id == id),
        back_populates="following",
        lazy="dynamic",
    )

    @property
    def password(self) -> str:
        return self.hashed_password

    @password.setter
    def password(self, password: str) -> None:
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password: str) -> bool:
        return check_password_hash(self.password, password)

    def follow(self, user: "User") -> None:
        self.following.append(user)

    def unfollow(self, user: "User") -> None:
        self.following.remove(user)

    def is_following(self, user: "User") -> bool:
        return self.following.filter(followers.c.followed_id == user.id).count() > 0

    def followers_count(self) -> int:
        return self.followers.count()

    def to_dict(self) -> dict[str, Union[int, str, list[dict[str, int]]]]:
        return {
            "id": self.id,
            "firstName": self.first_name,
            "lastName": self.last_name,
            "username": self.username,
            "email": self.email,
            "bio": self.bio,
            "field": self.field,
            "saves": [save.to_dict() for save in self.saves],
            "followCount": self.followers_count(),
            "following": [
                {"id": user.id, "username": user.username} for user in self.following
            ],
        }
