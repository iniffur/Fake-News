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
    const newsHeadlinesUK = await new NewsFormatter().outputNews();
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
      newsHeadlines: newsHeadlinesUK,
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
      error: outputArray,
      title: "This Reeks",
    });
  },

  GBHeadlines: async (req: Request, res: Response) => {
    const newsHeadlinesUk = await new NewsFormatter().outputNews();
    res.render("home/headlines", {
      title: "This Reeks",
      newsHeadlines: newsHeadlinesUk,
    });
  },

  USHeadlines: async (req: Request, res: Response) => {
    const newsHeadlinesUS = await new NewsFormatter().outputNewsUS();
    res.render("home/headlines", {
      title: "This Reeks",
      newsHeadlines: newsHeadlinesUS,
    });
  },

  TopicHeadlines: async (req: Request, res: Response) => {
    const topic = req.body.inputTopic;
    const newsHeadlinesTopic = await new NewsFormatter().outputNewsByTopic();
    res.render("home/headlines", {
      title: "This Reeks",
      newsHeadlines: newsHeadlinesTopic,
    });
  },
};

export default HomeController;
