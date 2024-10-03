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
