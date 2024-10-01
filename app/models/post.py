from datetime import datetime
from typing import Union

from .db import db, environment, SCHEMA, add_prefix_for_prod


class Post(db.Model):
    __tablename__ = "posts"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String, nullable=False)
    body = db.Column(db.Text, nullable=False)
    user_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False
    )
    created_at = db.Column(db.DateTime, default=datetime.now())
    updated_at = db.Column(db.DateTime, onupdate=datetime.now())

    user = db.relationship("User", back_populates="posts")
    # uselist=False because this relationship is one-to-one
    graph = db.relationship("Graph", uselist=False, back_populates="post")
    saves = db.relationship("Save", back_populates="post")
    comments = db.relationship(
        "Comment", secondary="post_comments", back_populates="posts"
    )

    def to_dict(self) -> dict[str, Union[int, str]]:
        return {
            "id": self.id,
            "title": self.title,
            "body": self.body,
            "user_id": self.user_id,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }
