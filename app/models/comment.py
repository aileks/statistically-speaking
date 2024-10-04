from datetime import datetime
from typing import Union

from .db import db, environment, SCHEMA, add_prefix_for_prod


class Comment(db.Model):
    __tablename__ = "comments"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.Text(), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, onupdate=datetime.now)
    user_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("users.id")), nullable=False
    )
    post_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("posts.id")), nullable=False
    )

    post = db.relationship("Post", back_populates="comments")
    user = db.relationship("User", back_populates="comments")

    def to_dict(self) -> dict[str, Union[int, str]]:
        user = self.user.to_dict()
        return {
            "id": self.id,
            "body": self.body,
            "user": {"id": user["id"], "username": user["username"]},
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }
