from .db import db, environment, SCHEMA, add_prefix_for_prod


class PostComment(db.Model):
    __tablename__ = "post_comments"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("posts.id")), nullable=False
    )
    comment_id = db.Column(
        db.Integer, db.ForeignKey(add_prefix_for_prod("comments.id")), nullable=False
    )
