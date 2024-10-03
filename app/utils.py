import pandas as pd


def manage_data(url):
    df = pd.read_csv(url)
    return df
