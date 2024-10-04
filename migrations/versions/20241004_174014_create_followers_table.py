"""create followers table

Revision ID: e15e428b2e46
Revises: c02af12444e1
Create Date: 2024-10-04 17:40:14.505271

"""

import os

import sqlalchemy as sa
from alembic import op

environment = os.getenv("FLASK_APP")
SCHEMA = os.getenv("SCHEMA")

# revision identifiers, used by Alembic.
revision = "e15e428b2e46"
down_revision = "c02af12444e1"
branch_labels = None
depends_on = None


def upgrade():
    followers_table = op.create_table(
        "followers",
        sa.Column("follower_id", sa.Integer(), nullable=False),
        sa.Column("followed_id", sa.Integer(), nullable=False),
        sa.ForeignKeyConstraint(
            ["followed_id"],
            ["users.id"],
        ),
        sa.ForeignKeyConstraint(
            ["follower_id"],
            ["users.id"],
        ),
        sa.PrimaryKeyConstraint("follower_id", "followed_id"),
    )

    if environment == "production":
        op.execute(f"ALTER TABLE followers SET SCHEMA {SCHEMA};")
        op.execute(
            f"ALTER TABLE {SCHEMA}.followers DROP CONSTRAINT followers_followed_id_fkey, "
            f"ADD CONSTRAINT followers_followed_id_fkey FOREIGN KEY (followed_id) REFERENCES {SCHEMA}.users(id);"
        )
        op.execute(
            f"ALTER TABLE {SCHEMA}.followers DROP CONSTRAINT followers_follower_id_fkey, "
            f"ADD CONSTRAINT followers_follower_id_fkey FOREIGN KEY (follower_id) REFERENCES {SCHEMA}.users(id);"
        )

    with op.batch_alter_table(
        "comments", schema=SCHEMA if environment == "production" else None
    ) as batch_op:
        batch_op.alter_column(
            "created_at",
            existing_type=sa.DATETIME(),
            nullable=True,
            existing_server_default=sa.text("(CURRENT_TIMESTAMP)"),
        )

    with op.batch_alter_table(
        "posts", schema=SCHEMA if environment == "production" else None
    ) as batch_op:
        batch_op.alter_column(
            "created_at",
            existing_type=sa.DATETIME(),
            nullable=True,
            existing_server_default=sa.text("(CURRENT_TIMESTAMP)"),
        )

    with op.batch_alter_table(
        "users", schema=SCHEMA if environment == "production" else None
    ) as batch_op:
        batch_op.add_column(
            sa.Column("first_name", sa.String(length=40), nullable=False)
        )
        batch_op.add_column(
            sa.Column("last_name", sa.String(length=40), nullable=False)
        )
        batch_op.add_column(sa.Column("bio", sa.Text(), nullable=True))
        batch_op.add_column(sa.Column("field", sa.String(length=40), nullable=True))


def downgrade():
    with op.batch_alter_table(
        "users", schema=SCHEMA if environment == "production" else None
    ) as batch_op:
        batch_op.drop_column("last_name")
        batch_op.drop_column("first_name")

    with op.batch_alter_table(
        "posts", schema=SCHEMA if environment == "production" else None
    ) as batch_op:
        batch_op.alter_column(
            "created_at",
            existing_type=sa.DATETIME(),
            nullable=False,
            existing_server_default=sa.text("(CURRENT_TIMESTAMP)"),
        )

    with op.batch_alter_table(
        "comments", schema=SCHEMA if environment == "production" else None
    ) as batch_op:
        batch_op.alter_column(
            "created_at",
            existing_type=sa.DATETIME(),
            nullable=False,
            existing_server_default=sa.text("(CURRENT_TIMESTAMP)"),
        )

    op.drop_table("followers", schema=SCHEMA if environment == "production" else None)