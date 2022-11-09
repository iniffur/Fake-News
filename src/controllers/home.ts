import { Request, Response } from "express";
import Checker from "../model/home";
import NewsFormatter from "../model/newsFormatter";
import GoogleFormatter from "../model/googleFormatter";
import EmotionalAnalysisFormatter from "../model/emotionalAnalysisFormatter";
import Chart from "chart.js";

//express flash

// import fetchGoogleData from "../model/fetchGoogleData";
import SentimentFormatter from "../model/sentimentFormatter";

import dotenv from "dotenv";

dotenv.config();

const HomeController = {
  Index: async (req: Request, res: Response) => {
    const newsHeadlines = new NewsFormatter().outputNews();
    const newsHeadlinesUS = new NewsFormatter().outputNewsUs();

    console.log(123);

    res.render("home/index", {
      title: "This Reeks",
      newsHeadlines: newsHeadlines,
      newsHeadlinesUS: newsHeadlinesUS,
    });
  },
  Check: async (req: Request, res: Response) => {
    let inputText = req.body.headline;

    inputText = inputText.replace(/\r/g, "").replace(/\n/g, " ");

    const outputString = await new Checker(inputText).check();
    const googleApiStatement =
      await new GoogleFormatter().outputGoogleStatements(inputText);
    const googleApiResults = await new GoogleFormatter().outputGoogleResults(
      inputText
    );

    const emotionalAnalysisResults =
      await new EmotionalAnalysisFormatter().outputEmotionalAnalysis();
    // const emotionalAnalysisResults =
    //   await new EmotionalAnalysisFormatter().outputEmotionalAnalysis(inputText);
    const sentimentApiStatement =
      await new SentimentFormatter().outputSentimentStatement(inputText);
    const sentimentApiResults =
      await new SentimentFormatter().outputSentimentValue(inputText);

    const emotionObject = await new EmotionalAnalysisFormatter().outputObject();

    res.render("home/result", {
      result: outputString,
      googleContent: googleApiStatement,
      googleResults: googleApiResults,
      emotionalAnalysis: emotionalAnalysisResults,
      emotionObject: emotionObject,
      sentimentResults: sentimentApiResults,
      sentimentStatement: sentimentApiStatement,
      headline: inputText,
      error: outputString,
      title: "This Reeks",
    });
  },
};

export default HomeController;
