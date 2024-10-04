from sqlalchemy.sql import text

from app.models import db, User, environment, SCHEMA


def seed_users():
    users = [
        User(
            username="demo",
            first_name="Demo",
            last_name="User",
            email="demo@example.com",
            password="password",
            bio="I'm a demo user for testing purposes.",
            field="Software Development",
        ),
        User(
            username="marnie",
            first_name="Marnie",
            last_name="Jones",
            email="marnie@gmail.com",
            password="password",
            bio="Passionate about art and design.",
            field="Graphic Design",
        ),
        User(
            username="bobbie",
            first_name="Bobbie",
            last_name="Smith",
            email="bobbie@outlook.com",
            password="password",
            bio="Always learning new things in tech.",
            field="Data Science",
        ),
        User(
            username="alex",
            first_name="Alex",
            last_name="Johnson",
            email="alex@yahoo.com",
            password="password",
            bio="Exploring the frontiers of AI and machine learning.",
            field="Artificial Intelligence",
        ),
        User(
            username="sam",
            first_name="Samantha",
            last_name="Lee",
            email="sam.lee@hotmail.com",
            password="password",
            bio="Crafting user experiences that delight and inspire.",
            field="UX Design",
        ),
        User(
            username="chris",
            first_name="Chris",
            last_name="Taylor",
            email="chris.taylor@gmail.com",
            password="password",
            bio="Building scalable systems and solving complex problems.",
            field="Software Engineering",
        ),
        User(
            username="jordan",
            first_name="Jordan",
            last_name="Rivera",
            email="jordan.rivera@outlook.com",
            password="password",
            bio="Passionate about creating secure and robust applications.",
            field="Cybersecurity",
        ),
        User(
            username="casey",
            first_name="Casey",
            last_name="Morgan",
            email="casey.morgan@yahoo.com",
            password="password",
            bio="Transforming data into actionable insights.",
            field="Data Analytics",
        ),
        User(
            username="taylor",
            first_name="Taylor",
            last_name="Nguyen",
            email="taylor.nguyen@gmail.com",
            password="password",
            bio="Bridging the gap between business and technology.",
            field="Product Management",
        ),
        User(
            username="jamie",
            first_name="Jamie",
            last_name="Brown",
            email="jamie.brown@hotmail.com",
            password="password",
            bio="Creating responsive and accessible web experiences.",
            field="Front-end Development",
        ),
    ]

    for user in users:
        db.session.add(user)

    db.session.commit()


def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
