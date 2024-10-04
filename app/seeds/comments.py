from datetime import datetime

from sqlalchemy import text

from app.models import db, Comment, Post, environment, SCHEMA


def seed_comments() -> None:
    post1 = Post.query.get(1)
    post2 = Post.query.get(2)
    post3 = Post.query.get(3)

    comment1 = Comment(
        body="This dataset could be useful for studying how automation affects different professions.",
        user_id=2,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    comment2 = Comment(
        body="I wonder if we can identify emerging job sectors based on this data.",
        user_id=3,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    comment3 = Comment(
        body="It's fascinating how tech products have become so essential in daily life.",
        user_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    comment4 = Comment(
        body="I think bundling accessories with bigger items is a great idea for businesses.",
        user_id=3,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    comment5 = Comment(
        body="The pandemic's economic impact was devastating, especially for small businesses.",
        user_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    comment6 = Comment(
        body="I hope recovery plans focus on supporting industries like hospitality and travel.",
        user_id=2,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    post1.comments.append(comment1)
    post1.comments.append(comment2)
    post2.comments.append(comment3)
    post2.comments.append(comment4)
    post3.comments.append(comment5)
    post3.comments.append(comment6)

    db.session.add_all([comment1, comment2, comment3, comment4, comment5, comment6])
    db.session.commit()


def undo_comments() -> None:
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()
