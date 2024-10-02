from datetime import datetime
from typing import Union

from .db import db, environment, SCHEMA
from .post import post_comments


class Comment(db.Model):
    __tablename__ = "comments"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    body = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, onupdate=datetime.now)
    posts = db.relationship("Post", secondary=post_comments, back_populates="comments")

    def to_dict(self) -> dict[str, Union[int, str]]:
        return {
            "id": self.id,
            "body": self.body,
            "created_at": self.created_at,
            "updated_at": self.updated_at,
        }
