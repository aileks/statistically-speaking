from sqlalchemy.sql import text

from app.models import db, User, environment, SCHEMA


def seed_users():
    demo = User(username="demo", email="demo@example.com", password="password")
    marnie = User(username="marnie", email="marnie@gmail.com", password="password")
    bobbie = User(username="bobbie", email="bobbie@outlook.com", password="password")

    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.commit()


def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
