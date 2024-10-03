import pandas as pd


def get_data(graph: dict[str, str]) -> dict[str, list]:
    """
    Fetches data from a CSV file located at the specified URL in the graph dictionary.
    Args:
        graph (dict): A dictionary containing the URL of the CSV file under the key "url".
    Returns:
        dict: A dictionary representation of the first 10 rows of the CSV file,
              structured in a split format with columns and data.
    """
    df: pd.DataFrame = pd.read_csv(graph["url"])
    data: dict[str, list] = df.to_dict("split")
    return data


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
