from flask.cli import AppGroup

from app.models.db import environment
from .comments import seed_comments, undo_comments
from .followers import undo_followers, seed_followers
from .graphs import undo_graphs, seed_graphs
from .posts import undo_posts, seed_posts
from .users import seed_users, undo_users

seed_commands = AppGroup("seed")


@seed_commands.command("all")
def seed():
    if environment == "production":
        # Before seeding in production, you want to run the seed undo
        # command, which will  truncate all tables prefixed with
        # the schema name (see comment in users.py undo_users function).
        # Make sure to add all your other model's undo functions below
        undo_users()
        undo_posts()
        undo_graphs()
        undo_comments()
        undo_followers()
    seed_users()
    seed_posts()
    seed_graphs()
    seed_comments()
    seed_followers()


@seed_commands.command("undo")
def undo():
    undo_users()
    undo_posts()
    undo_graphs()
    undo_comments()
    undo_followers()
