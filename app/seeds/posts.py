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
        title="Product Purchase Trends",
        body="The data reveals interesting trends in product purchases, with laptops and smartphones being among the most popular items. Accessories like headphones, keyboards, and mice are also in high demand, often purchased in larger quantities, likely due to their affordability compared to higher-end items. Notably, monitors and printers are frequently bought for office and remote work setups. Consumer behavior suggests that tech essentials are a priority, with many purchases focused on enhancing productivity. Additionally, products like tablets and smartwatches show steady growth, appealing to both personal and professional users. The overall trend indicates an increasing reliance on technology, providing opportunities for businesses to offer bundled packages or promotions on related items to maximize customer engagement and sales.",
        user_id=2,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    post3 = Post(
        title="COVID-19 Impact on Employment",
        body="The data illustrates the significant impact of COVID-19 on job losses throughout 2020. As the pandemic progressed, there was a sharp rise in unemployment, with the most severe losses occurring in mid-2020. Industries such as hospitality, retail, and travel were hit hardest, with thousands of jobs lost in a matter of weeks. The trend shows that job recovery was slow towards the end of the year, with some sectors beginning to stabilize but others continuing to struggle. This data underscores the deep and widespread economic disruption caused by the pandemic, highlighting the vulnerability of certain industries and the need for targeted recovery efforts.",
        user_id=3,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    post4 = Post(
        title="Social Media Usage Insights",
        body="A deep dive into social media usage data reveals that platforms like Instagram, Facebook, and Twitter continue to dominate user engagement, especially among younger demographics. Peak usage times align with weekends and late evenings, indicating when users are most active. The analysis shows that visual content garners higher engagement compared to text-only posts, highlighting the importance of image and video-centric content. The findings suggest that brands and content creators can maximize reach by targeting these peak times and focusing on multimedia formats to attract and retain audience attention.",
        user_id=4,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    post5 = Post(
        title="E-commerce Growth Post-2020",
        body="Data on e-commerce transactions highlights a surge in online shopping post-2020, with categories like apparel, home goods, and electronics leading the charge. The trend shows increased demand for convenience and home delivery options, as well as a shift toward sustainable products. Interestingly, seasonal trends indicate high spikes in spending during end-of-year holidays and back-to-school seasons. This data offers valuable insights for retailers to enhance digital marketing efforts and improve logistics for meeting consumer expectations in a rapidly evolving e-commerce landscape.",
        user_id=5,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    post6 = Post(
        title="Renewable Energy Adoption Patterns",
        body="The dataset reveals significant growth in renewable energy adoption, with solar and wind energy showing the fastest uptake among residential and commercial sectors. Adoption rates are highest in regions with supportive government incentives, and data indicates a strong correlation between household income and likelihood of renewable energy use. This information is essential for understanding how policy, economic status, and environmental awareness drive the transition to cleaner energy sources, providing key data for future sustainability efforts.",
        user_id=6,
        created_at=datetime.now(),
        updated_at=datetime.now(),
    )

    db.session.add(post1)
    db.session.add(post2)
    db.session.add(post3)
    db.session.add(post4)
    db.session.add(post5)
    db.session.add(post6)
    db.session.commit()


def undo_posts() -> None:
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.posts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM posts"))

    db.session.commit()
