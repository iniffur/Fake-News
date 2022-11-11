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
      "X-RapidAPI-Key": "c304c99ad8msh0b0802dae280657p1034c7jsn7f5af2caa2d3",
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
