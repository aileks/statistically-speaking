from typing import Union

from .db import db, environment, SCHEMA, add_prefix_for_prod


class Graph(db.Model):
    __tablename__ = "graphs"

    if environment == "production":
        __table_args__ = {"schema": SCHEMA}

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String, nullable=False)
    type = db.Column(db.String, nullable=False)
    x_axis = db.Column(db.String)
    y_axis = db.Column(db.String)
    post_id = db.Column(
        db.Integer,
        db.ForeignKey(add_prefix_for_prod("posts.id")),
        nullable=False,
        unique=True,
    )

    post = db.relationship("Post", back_populates="graph")

    def to_dict(self) -> dict[str, Union[int, str]]:
        return {
            "id": self.id,
            "url": self.url,
            "type": self.type,
            "x_axis": self.x_axis,
            "y_axis": self.y_axis,
            "post_id": self.post_id,
        }
