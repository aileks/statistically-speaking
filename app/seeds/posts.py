from datetime import datetime

from sqlalchemy.sql import text

from app.models import db, Post, environment, SCHEMA


def seed_posts() -> None:
    post1 = Post(
        title="People and Their Jobs",
        body="This rich dataset provides a fascinating glimpse into the diverse professional landscape, offering potential for in-depth studies on career trends, demographic shifts in various industries, and the evolving nature of the global workforce.",
        user_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    post2 = Post(
        title="Customer Locations",
        body="The data points to urban centers as the dominant hubs for customer activity, with cities like New York, Los Angeles, and Chicago leading in both customer count and total purchases. Suburban and rural areas, while contributing lower overall sales, demonstrate steady purchasing trends. Notably, the data also indicates a growing trend of online purchases from traditionally underserved regions, suggesting that digital reach is expanding market potential beyond physical proximity. This trend opens opportunities for targeted marketing efforts in regions previously considered low-traffic areas.",
        user_id=2,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    post3 = Post(
        title="Organizational Data",
        body="The data provides insights into the growth trajectory of organizations over time, particularly in relation to employee count and revenue generation. Larger organizations exhibit a clear correlation between workforce size and revenue growth, with steady increases in both metrics over the years. Smaller firms, while experiencing slower growth, show more volatility in revenue fluctuations, suggesting that they may face greater challenges in scaling. The consistent upward trend in employee numbers among high-revenue firms points to the strategic importance of workforce expansion in driving organizational success.",
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
