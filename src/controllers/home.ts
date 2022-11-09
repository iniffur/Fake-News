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
    const currentTime = new Date();
    const lastFetchTime = req.app.settings.latestNewsApiFetchTimes.gb;
    const timeToWaitMillisecs = 3600_000;
    let newsHeadlines: any;

    // check if enough time has passed, fetch if it has, use stored data if not
    if (currentTime.getTime() < lastFetchTime.getTime() + timeToWaitMillisecs) {
      newsHeadlines = req.app.settings.newsHeadlines.gb;
      // debug statements, to use when integrating flags
      // console.log(
      //   `${
      //     (currentTime.getTime() - lastFetchTime.getTime()) / 1000
      //   } secs difference`
      // );
      // console.log(`difference SMALLER than ${timeToWaitMillisecs / 1000} secs`);
      // console.log(`using locally stored data`);
    } else {
      // do fetch request, update local headlines data and latest fetch time
      newsHeadlines = new NewsFormatter().outputNews();
      req.app.settings.newsHeadlines.gb = newsHeadlines;
      req.app.settings.latestNewsApiFetchTimes.gb = currentTime;
      // debug statements, to use when integrating flags
      // console.log(
      //   `${
      //     (currentTime.getTime() - lastFetchTime.getTime()) / 1000
      //   } secs difference`
      // );
      // console.log(`difference BIGGER than ${timeToWaitMillisecs / 1000} secs`);
      // console.log(`new fetch requst done`);
    }

    res.render("home/index", {
      title: "This Reeks",
      newsHeadlines: newsHeadlines,
    });
  },
  Check: async (req: Request, res: Response) => {
    const inputText = req.body.headline;
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
