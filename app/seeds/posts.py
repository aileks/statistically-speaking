from datetime import datetime

from sqlalchemy.sql import text

from app.models import db, Post, environment, SCHEMA


def seed_posts() -> None:
    post1 = Post(
        title="Data Science in the Modern Era",
        body="In today's rapidly evolving digital landscape, data science is no longer just a niche field; it has become an integral part of almost every industry. Companies leverage data science to enhance decision-making, improve customer experiences, and drive innovation. From predictive analytics to data visualization, this post explores the transformative power of data science and how organizations are adapting to harness its potential. Join the conversation on how we can collectively navigate the challenges and opportunities that lie ahead in this exciting field.",
        user_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    post2 = Post(
        title="AI and Machine Learning",
        body="Artificial intelligence and machine learning are revolutionizing healthcare in unprecedented ways. These technologies are not only improving diagnostic accuracy and patient care but also streamlining administrative processes and enabling personalized medicine. This post delves into various applications of AI and machine learning within the healthcare sector, highlighting success stories and ongoing research. Let's discuss how these advancements can enhance patient outcomes and what challenges we must overcome to fully integrate these technologies into everyday healthcare practices.",
        user_id=2,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    post3 = Post(
        title="Big Data Challenges",
        body="The age of big data brings with it not just opportunities but significant challenges as well. As organizations collect vast amounts of data, they face hurdles related to data quality, storage, security, and compliance. This post takes a closer look at the common challenges encountered across various sectors, including finance, retail, and technology, and offers insights into potential solutions. Join us in discussing the best practices for managing big data effectively and how organizations can leverage these insights to stay ahead in a competitive landscape.",
        user_id=3,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.commit()


def undo_posts() -> None:
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))

    db.session.commit()
