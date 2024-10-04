from flask import Blueprint, request

from app.models import db, Comment

comments = Blueprint("comments", __name__)


@comments.route("<int:comment_id>", methods=["PUT"])
def update_comment(comment_id: int):
    comment = Comment.query.get(comment_id)

    if not comment:
        return {"message": "Comment not found."}, 404

    comment.body = request.form.get("comment_body")
    db.session.commit()

    return {"message": "Comment updated."}


@comments.route("<int:comment_id>", methods=["DELETE"])
def delete_comment(comment_id: int):
    comment = Comment.query.get(comment_id)

    if not comment:
        return {"message": "Comment not found."}, 404

    db.session.delete(comment)
    db.session.commit()

    return {"message": "Comment deleted."}
