import { Request, Response } from "express";
import Checker from "../model/home";

const HomeController = {
  Index: (req: Request, res: Response) => {
    res.render("home/index", { title: "This Reeks" });
  },
  Check: (req: Request, res: Response) => {
    const text = req.body.headline;
    const checkerFunction = new Checker(text);
    const outputArray = checkerFunction.check();
    const outputString =
      outputArray[0] <= 20
        ? `${outputArray[2]}Somewhat believable.${outputArray[1]}`
        : `${outputArray[2]}Trash.${outputArray[1]}`;
    res.render("home/result", { result: outputString, headline: text });
  },
};

export default HomeController;
