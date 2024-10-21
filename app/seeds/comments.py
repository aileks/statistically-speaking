from datetime import datetime, timedelta
from random import uniform

from sqlalchemy import text

from app.models import db, Comment, Post, environment, SCHEMA


def random_date(start, end):
    return start + timedelta(seconds=int(uniform(0, (end - start).total_seconds())))


def seed_comments() -> None:
    post1 = Post.query.get(1)
    post2 = Post.query.get(2)
    post3 = Post.query.get(3)
    post4 = Post.query.get(4)
    post6 = Post.query.get(6)

    now = datetime.now()
    one_month_ago = now - timedelta(days=30)

    comments = [
        Comment(
            body="This dataset could be useful for studying how automation affects different professions.",
            user_id=2,
            created_at=random_date(one_month_ago, now),
            post_id=post1.id
        ),
        Comment(
            body="I wonder if we can identify emerging job sectors based on this data.",
            user_id=3,
            created_at=random_date(one_month_ago, now),
            post_id=post1.id
        ),
        Comment(
            body="It's fascinating how tech products have become so essential in daily life.",
            user_id=1,
            created_at=random_date(one_month_ago, now),
            post_id=post2.id
        ),
        Comment(
            body="I think bundling accessories with bigger items is a great idea for businesses.",
            user_id=3,
            created_at=random_date(one_month_ago, now),
            post_id=post2.id
        ),
        Comment(
            body="The pandemic's economic impact was devastating, especially for small businesses.",
            user_id=1,
            created_at=random_date(one_month_ago, now),
            post_id=post3.id
        ),
        Comment(
            body="I hope recovery plans focus on supporting industries like hospitality and travel.",
            user_id=2,
            created_at=random_date(one_month_ago, now),
            post_id=post3.id
        ),
        Comment(
            body="I wonder how this data relates to trends among each age group.",
            user_id=4,
            created_at=random_date(one_month_ago, now),
            post_id=post4.id
        ),
        Comment(
            body="It's interesting how the 18-24 and 25-34 age groups are so close to each other.",
            user_id=5,
            created_at=random_date(one_month_ago, now),
            post_id=post4.id
        ),
        Comment(
            body="Social media plays a key role in how brands connect with customers.",
            user_id=1,
            created_at=random_date(one_month_ago, now),
            post_id=post4.id
        ),
        Comment(
            body="Fascinating how much social media use there is even among older populations!",
            user_id=1,
            created_at=random_date(one_month_ago, now),
            post_id=post4.id
        ),
        Comment(
            body="Government incentives are key to boosting renewable energy adoption.",
            user_id=2,
            created_at=random_date(one_month_ago, now),
            post_id=post6.id
        )
    ]

    db.session.add_all(comments)
    db.session.commit()


def undo_comments() -> None:
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.comments RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM comments"))

    db.session.commit()
