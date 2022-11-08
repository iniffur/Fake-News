import { Request, Response } from "express";
import Checker from "../model/home";
import NewsFormatter from "../model/newsFormatter";
import GoogleFormatter from "../model/googleFormatter";
import EmotionalAnalysisFormatter from "../model/emotionalAnalysisFormatter";

//express flash

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
    const inputText = req.body.headline;
    const outputString = await new Checker(inputText).check();
    const googleApiStatement =
      await new GoogleFormatter().outputGoogleStatements(inputText);
    const googleApiResults = await new GoogleFormatter().outputGoogleResults(
      inputText
    );
    const dataPie = {
      type: "pie",
      data: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        datasets: [
          {
            data: [1234, 2234, 3234, 4234],
            backgroundColor: [
              "rgba(117,169,255,0.6)",
              "rgba(148,223,215,0.6)",
              "rgba(208,129,222,0.6)",
              "rgba(247,127,167,0.6)",
            ],
          },
        ],
      },
    };
    new mdb.Chart(document.getElementById("chart-pie"), dataPie);

    const emotionalAnalysisResults =
      await new EmotionalAnalysisFormatter().outputEmotionalAnalysis(inputText);

    res.render("home/result", {
      result: outputString,
      googleContent: googleApiStatement,
      googleResults: googleApiResults,
      emotionalAnalysis: emotionalAnalysisResults,
      pie: dataPie,
      headline: inputText,
      error: outputString,
      title: "This Reeks",
    });
  },

  // Result: (req: Request, res: Response) => {
  //   res.render("home/result", { title: "This Reeks" });
  // },
};

export default HomeController;
