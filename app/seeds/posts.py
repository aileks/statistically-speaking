from datetime import datetime

from sqlalchemy.sql import text

from app.models import db, Post, environment, SCHEMA


def seed_posts():
    post1 = Post(
        title="Data Science in the Modern Era",
        description="A comprehensive look into how data science is shaping industries.",
        user_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    post2 = Post(
        title="AI and Machine Learning",
        description="Understanding the impact of AI and machine learning in healthcare.",
        user_id=2,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )
    post3 = Post(
        title="Big Data Challenges",
        description="An exploration of the challenges posed by big data in various sectors.",
        user_id=3,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.commit()


def undo_posts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))

    db.session.commit()
