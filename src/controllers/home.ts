import { Request, Response } from "express";
import Checker from "../model/home";
import NewsFormatter from "../model/newsFormatter";
import GoogleFormatter from "../model/googleFormatter";
import EmotionalAnalysisFormatter from "../model/emotionalAnalysisFormatter";
import Chart from "chart.js";

//express flash

// import fetchGoogleData from "../model/fetchGoogleData";
import SentimentFormatter from "../model/sentimentFormatter";
import PoliticalBiasFormatter from "../model/politicalBiasFormatter";

import dotenv from "dotenv";

dotenv.config();

const HomeController = {
  Index: async (req: Request, res: Response) => {
    const newsHeadlines = new NewsFormatter().outputNews();

    res.render("home/index", {
      title: "This Reeks",
      newsHeadlines: newsHeadlines,
    });
  },
  Check: async (req: Request, res: Response) => {
    let inputText = req.body.headline;
    inputText = inputText.replace(/\r/g, "").replace(/\n/g, " ");
    const outputArray = await new Checker(inputText).check();
    const outputString = outputArray[1];
    const resultImage = outputArray[0];

    const politicalBiasStatement =
      await new PoliticalBiasFormatter().outputBiasValue(inputText);

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
      image: resultImage,
      result: outputString,
      politicalBias: politicalBiasStatement,
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
