import { Request, Response } from "express";
import Checker from "../model/home";

const HomeController = {
  Index: (req: Request, res: Response) => {
    res.render("home/index", { title: "This Reeks" });
  },
  Check: (req: Request, res: Response) => {
    const text = req.body.headline;
    const outputString = new Checker(text).check();

    console.log("displaying");
    res.render("home/index", {
      result: outputString,
      headline: text,
      title: "This Reeks",
    });
  },
};

export default HomeController;
