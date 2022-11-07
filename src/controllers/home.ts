import { Request, Response } from "express";
import Checker from "../model/home";
import NewsFormatter from "../model/newsFormatter";
// import fetchGoogleData from "../model/fetchGoogleData";

import dotenv from "dotenv";
dotenv.config();

// const googleDataApiKey = process.env.GOOGLE_DATA_API_KEY;

const HomeController = {
  Index: async (req: Request, res: Response) => {
    const newsHeadlines = new NewsFormatter().outputNews();
    const topTen = newsHeadlines.slice(0, 10);

    const googleData: any = [];
    trumpHeadlines.claims.forEach((item) => {
      googleData.push(item.claimReview[0].textualRating);
    });
    res.render("home/index", {
      title: "This Reeks",
      googleContent: googleData,
      newsHeadlines: topTen,
    });
  },
  Check: (req: Request, res: Response) => {
    const text = req.body.headline;
    const outputString = new Checker(text).check();

    console.log("displaying");
    res.render("home/result", {
      result: outputString,
      headline: text,
      title: "This Reeks",
    });
  },

  // Result: (req: Request, res: Response) => {
  //   res.render("home/result", { title: "This Reeks" });
  // },
};

export default HomeController;
