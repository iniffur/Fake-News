import { Request, Response } from "express";
import Checker from "../model/home";

const array = [
  "do",
  "are",
  "?",
  "the best",
  "the worst",
  "ultimate guide",
  "why we love",
  "why we hate",
  "in my opinion",
  "you'll never believe",
  "says",
  "unnamed",
  "are today",
  "is today",
  "where they",
  "simple method",
  "one trick",
  "this is what happens",
  "weird trick",
  "why",
  "reveals",
  "don't want you to know",
];

const HomeController = {
  Index: (req: Request, res: Response) => {
    res.render("home/index", { title: "This Reeks" });
  },
  Check: (req: Request, res: Response) => {
    const text = req.body.headline;
    let checkerFunction = new Checker(text);
    let outputArray = checkerFunction.check();
    const outputString =
      outputArray[0] <= 20
        ? `${outputArray[2]}Somewhat believable.${outputArray[1]}`
        : `${outputArray[2]}Trash.${outputArray[1]}`;
    res.render("home/result", { result: outputString, headline: text });
  },
};

export default HomeController;
