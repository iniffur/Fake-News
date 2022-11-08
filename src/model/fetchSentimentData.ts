type sentimentData = {
  app_version: number;
  time_taken: number;
  msg: string;
  ok: any;
  aggregate_sentiment: {
    neg: number;
    neu: number;
    pos: number;
    compound: number;
  };
  sentiment_list: Array<{
    neg: number;
    neu: number;
    pos: number;
    compound: number;
    sentence: string;
  }>;
  sentiment: string;
};

async function fetchSentimentData(
  url: string,
  input: string
): Promise<sentimentData> {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "fead1ea25bmshe9f79640743293bp1c74f4jsn5fed5c45c330",
      "X-RapidAPI-Host": "text-analysis12.p.rapidapi.com",
    },
    body: `{"language":"english","text":"${input}"}`,
  };

  return fetch(url, options).then((response: any) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<sentimentData>;
  });
}

export default fetchSentimentData;
