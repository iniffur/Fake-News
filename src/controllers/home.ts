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
    const topTen = newsHeadlines.slice(0, 10);

    res.render("home/index", {
      title: "This Reeks",
      newsHeadlines: topTen,
    });
  },
  Check: async (req: Request, res: Response) => {
    const inputText = req.body.headline;
    const outputString = await new Checker(inputText).check();
    const googleApiData = await new GoogleFormatter().outputGoogleResults(
      inputText
    );

    console.log("displaying");
    res.render("home/result", {
      result: outputString,
      googleContent: googleApiData,
      headline: inputText,
      title: "This Reeks",
    });
  },

  // Result: (req: Request, res: Response) => {
  //   res.render("home/result", { title: "This Reeks" });
  // },
};

export default HomeController;
