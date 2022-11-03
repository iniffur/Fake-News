import { Request, Response } from "express";
import Checker from "../model/home";
import NewsHeadline from "../model/newsHeadline";

const HomeController = {
  Index: (req: Request, res: Response) => {
    const apiTest = new NewsHeadline().getHeadlineData;
    res.render("home/index", { title: "This Reeks", apiContent: apiTest });
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
