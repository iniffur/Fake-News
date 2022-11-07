import fetchSentimentData from "./fetchSentimentData";

class SentimentFormatter {
  outputSentimentData = async (query: string) => {
    const sentimentData = await fetchSentimentData(
      "https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1",
      query
    );

    return sentimentData.aggregate_sentiment.compound;
  };
}

export default SentimentFormatter;
