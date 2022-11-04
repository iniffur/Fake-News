import { Request, Response } from "express";
import Checker from "../model/home";
import NewsFormatter from "../model/newsFormatter";

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
  Check: (req: Request, res: Response) => {
    const text = req.body.headline;
    const outputArray = new Checker(text).check();
    const outputString = new Checker(text).format(outputArray);

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
