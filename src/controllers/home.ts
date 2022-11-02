import { Request, Response } from "express";
import Checker from "../model/home";

const HomeController = {
  // Index: (req: Request, res: Response) => {
  //   res.render("home/index", { title: "This Reeks" });
  // },
  Check: (req: Request, res: Response) => {
    // const submitButton = document.getElementById("submitButton");
    // const resultDiv = document.getElementById("resultDiv");

    const submitButton = req.body.submitButton;
    const resultDiv = req.body.resultDiv;

    const text = "req.body.headline;";
    const outputString = new Checker(text).check();

    submitButton.addEventListener("click", function handleClick() {
      console.log("clicked button");
      resultDiv.collapse.show;
    });
    // function handleClick(this: resultDiv) {

    // }
    console.log("displaying");
    res.render("home/index", {
      result: outputString,
      headline: text,
      title: "This Reeks",
    });
  },
  // CallChecker: (req: Request, res: Response) => {
  //   const text = req.body.headline;
  //   const checkerFunction = new Checker(text);
  //   const outputArray = checkerFunction.check();
  //   const outputString =
  //     outputArray[0] <= 20
  //       ? `${outputArray[2]}Somewhat believable.${outputArray[1]}`
  //       : `${outputArray[2]}Trash.${outputArray[1]}`;
  // },
};

export default HomeController;
