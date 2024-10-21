from datetime import datetime
from typing import Union

from .db import db, environment, SCHEMA, add_prefix_for_prod


class Post(db.Model):
    __tablename__ = "posts"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100), nullable=False)
    body = db.Column(db.Text(), nullable=False)
    user_id = db.Column(
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("users.id")),
        nullable=False,
    )
    created_at = db.Column(db.DateTime, default=datetime.now)
    updated_at = db.Column(db.DateTime, onupdate=datetime.now)

    user = db.relationship("User", back_populates="posts")
    graph = db.relationship("Graph", uselist=False, back_populates="post")
    saves = db.relationship("Save", back_populates="post")
    comments = db.relationship(
        "Comment",
        back_populates="post",
        cascade="all, delete-orphan",
        order_by="asc(Comment.created_at)",
    )

    def to_dict(self) -> dict[str, Union[int, str]]:
        user = self.user.to_dict()
        return {
            "id": self.id,
            "title": self.title,
            "body": self.body,
            "user": {"id": user["id"], "username": user["username"]},
            "saves": [save.to_dict() for save in self.saves],
            "graph": self.graph.to_dict() if self.graph else None,
            "comments": [comment.to_dict() for comment in self.comments],
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }
