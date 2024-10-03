from datetime import datetime

from sqlalchemy.sql import text

from app.models import db, Post, environment, SCHEMA


def seed_posts() -> None:
    post1 = Post(
        title="People and Their Jobs",
        body="""
            This rich dataset provides a fascinating glimpse into the diverse professional landscape, offering
            potential for in-depth studies on career trends, demographic shifts in various industries, and the
            evolving nature of the global workforce.
            """,
        user_id=1,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    post2 = Post(
        title="Product Purchase Trends",
        body="""
            The data reveals interesting trends in product purchases, with laptops and smartphones being among the
            most popular items. Accessories like headphones, keyboards, and mice are also in high demand, often
            purchased in larger quantities, likely due to their affordability compared to higher-end items. Notably,
            monitors and printers are frequently bought for office and remote work setups. Consumer behavior suggests
            that tech essentials are a priority, with many purchases focused on enhancing productivity. Additionally,
            products like tablets and smartwatches show steady growth, appealing to both personal and professional
            users. The overall trend indicates an increasing reliance on technology, providing opportunities for
            businesses to offer bundled packages or promotions on related items to maximize customer engagement
            and sales.
            """,
        user_id=2,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    post3 = Post(
        title="Organizational Data",
        body="""
            The data provides insights into the growth trajectory of organizations over time, particularly in relation
            to employee count and revenue generation. Larger organizations exhibit a clear correlation between
            workforce size and revenue growth, with steady increases in both metrics over the years. Smaller firms,
            while experiencing slower growth, show more volatility in revenue fluctuations, suggesting that they may
            face greater challenges in scaling. The consistent upward trend in employee numbers among high-revenue
            firms points to the strategic importance of workforce expansion in driving organizational success.
            """,
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
