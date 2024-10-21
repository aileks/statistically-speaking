from typing import Union

import pandas as pd


def get_data(graph: dict[str, str]) -> dict[str, list]:
    """
    Fetches data from a CSV file located at the specified URL in the graph dictionary.
    Args:
        graph (dict): A dictionary containing the URL of the CSV file and graph type.
    Returns:
        dict: A dictionary representation of the CSV file data,
              structured based on the graph type.
    """
    df: pd.DataFrame = pd.read_csv(graph["url"])
    graph_type: str = graph["type"].lower()
    if graph_type in ["bar", "line"]:
        x_axis: str = graph["x_axis"]
        y_axis: str = graph["y_axis"]
        selected: pd.DataFrame = df[[x_axis, y_axis]]
        return selected.to_dict("split")

    return df.to_dict("split")


def check_data(graph: dict[str, str]) -> bool:
    """
    Checks if the data in the CSV file specified in the graph dictionary is valid.
    Args:
        graph (dict): A dictionary containing the URL of the CSV file under the key "url" and the type of graph under the key "type".
    Returns:
        bool: True if the data is valid, False otherwise.
    """
    if graph.type == "line" or graph.type == "bar":
        df: dict[str, list] = pd.read_csv(graph.url).to_dict("split")
        if len(df["columns"]) != 2:
            return False

    return True
