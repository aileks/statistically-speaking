from sqlalchemy.sql import text

from app.models import db, User, environment, SCHEMA


def seed_followers():
    users = User.query.all()

    user1 = users[0]
    user2 = users[1]
    user3 = users[2]
    user4 = users[3]

    follower_relationships = [
        (user1, user2),
        (user1, user3),
        (user2, user3),
        (user3, user4),
        (user4, user1),
    ]

    for follower, followed in follower_relationships:
        follower.follow(followed)

    db.session.commit()


def undo_followers():
    if environment == "production":
        db.session.execute(
            f"TRUNCATE table {SCHEMA}.followers RESTART IDENTITY CASCADE;"
        )
    else:
        db.session.execute(text("DELETE FROM followers"))

    db.session.commit()
