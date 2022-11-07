import { Request, Response } from "express";
import Checker from "../model/home";
import NewsFormatter from "../model/newsFormatter";
import GoogleFormatter from "../model/googleFormatter";

// import fetchGoogleData from "../model/fetchGoogleData";

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
    let googleApiStatement = null;
    let googleApiResults = null;
    const inputText = req.body.headline;
    const outputString = await new Checker(inputText).check();
    googleApiStatement = await new GoogleFormatter().outputGoogleStatements(
      inputText
    );
    googleApiResults = await new GoogleFormatter().outputGoogleResults(
      inputText
    );
    res.render("home/result", {
      result: outputString,
      googleContent: googleApiStatement,
      googleResults: googleApiResults,
      headline: inputText,
      title: "This Reeks",
    });
  },

  // Result: (req: Request, res: Response) => {
  //   res.render("home/result", { title: "This Reeks" });
  // },
};

export default HomeController;
