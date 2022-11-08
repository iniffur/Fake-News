import fetchSentimentData from "./fetchSentimentData";

class SentimentFormatter {
  outputSentimentValue = async (query: string) => {
    const sentimentData = await fetchSentimentData(
      "https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1",
      query
    );
    if (sentimentData.msg === "something went wrong on the server") {
      return "invalid Input";
    } else {
      return sentimentData.aggregate_sentiment.compound * 100;
    }
  };

  outputSentimentStatement = async (query: string) => {
    const sentimentData = await fetchSentimentData(
      "https://text-analysis12.p.rapidapi.com/sentiment-analysis/api/v1.1",
      query
    );
    if (sentimentData.msg === "something went wrong on the server") {
      return "invalid Input";
    }

    const compoundValue = sentimentData.aggregate_sentiment.compound;

    if (compoundValue >= 0.75) {
      return "The given statement is overwhelmingly positive";
    } else if (compoundValue < 0.75 && compoundValue >= 0.25) {
      return "The given statement is somewhat positive";
    } else if (compoundValue < 0.25 && compoundValue >= -0.25) {
      return "The given statement has a neutral sentiment";
    } else if (compoundValue > -0.75 && compoundValue <= -0.25) {
      return "The given statement is somewhat negative";
    } else if (compoundValue <= -0.75) {
      return "The given statement is overwhelmingly negative";
    }
  };
}

export default SentimentFormatter;
