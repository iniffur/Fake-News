import { Request, Response } from "express";
import Checker from "../model/home";
import NewsFormatter from "../model/newsFormatter";
import GoogleFormatter from "../model/googleFormatter";
import SentimentFormatter from "../model/sentimentFormatter";

import dotenv from "dotenv";
dotenv.config();

const HomeController = {
  Index: async (req: Request, res: Response) => {
    const newsHeadlines = new NewsFormatter().outputNews();
    const topTen = newsHeadlines.slice(0, 10);

    res.render("home/index", {
      title: "This Reeks",
      newsHeadlines: topTen,
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

    const sentimentApiResults =
      await new SentimentFormatter().outputSentimentData(inputText);

    res.render("home/result", {
      result: outputString,
      googleContent: googleApiStatement,
      googleResults: googleApiResults,
      sentimentresults: sentimentApiResults,
      headline: inputText,
      title: "This Reeks",
    });
  },
};

export default HomeController;
