from sqlalchemy.sql import text

from app.models import db, Graph, environment, SCHEMA


def seed_graphs() -> None:
    graph1 = Graph(
        type="table",
        url="https://mycapstonestorage.s3.amazonaws.com/people.csv",
        post_id=1,
    )

    graph2 = Graph(
        type="bar",
        url="https://mycapstonestorage.s3.amazonaws.com/customers.csv",
        post_id=2,
    )

    graph3 = Graph(
        type="line",
        url="https://mycapstonestorage.s3.amazonaws.com/jobs.csv",
        post_id=3,
    )

    graph4 = Graph(
        type="bar",
        url="https://mycapstonestorage.s3.amazonaws.com/social_media.csv",
        post_id=4,
    )

    graph5 = Graph(
        type="line",
        url="https://mycapstonestorage.s3.amazonaws.com/ecommerce.csv",
        post_id=5,
    )

    graph6 = Graph(
        type="table",
        url="https://mycapstonestorage.s3.amazonaws.com/energy.csv",
        post_id=6,
    )

    db.session.add(graph1)
    db.session.add(graph2)
    db.session.add(graph3)
    db.session.add(graph4)
    db.session.add(graph5)
    db.session.add(graph6)
    db.session.commit()


def undo_graphs() -> None:
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.graphs RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM graphs"))

    db.session.commit()
