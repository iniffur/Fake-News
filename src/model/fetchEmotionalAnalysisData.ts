type emotionalAnalysisData = {
  sentence: {
    anger: number;
    disgust: number;
    fear: number;
    joy: number;
    love: number;
    noemo: number;
    sadness: number;
    surprise: number;
    text: string;
  };
};

async function fetchEmotionalAnalysisData(
  url: string,
  input: string
): Promise<emotionalAnalysisData> {
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": "fead1ea25bmshe9f79640743293bp1c74f4jsn5fed5c45c330",
      "X-RapidAPI-Host": "emodex-emotions-analysis.p.rapidapi.com",
    },
    body: `{"sentence":"${input}"}`,
  };

  return fetch(url, options).then((response: any) => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<emotionalAnalysisData>;
  });
}

export default fetchEmotionalAnalysisData;
