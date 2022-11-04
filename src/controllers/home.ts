import { Request, Response } from "express";
import Checker from "../model/home";
import fetchPokemon from "../model/fetchPokemon";
import fetchNewsHeadline from "../model/fetchNewsHeadline";

import dotenv from "dotenv";
dotenv.config();

const newsHeadlineApiKey = process.env.NEWS_HEADLINES_API_KEY;

const HomeController = {
  Index: async (req: Request, res: Response) => {
    const pokemonData = await fetchPokemon("Bulbasaur");
    const newsHeadlineData = await fetchNewsHeadline(
      `https://newsapi.org/v2/everything?q=bitcoin&apiKey=${newsHeadlineApiKey}`
    );
    res.render("home/index", {
      title: "This Reeks",
      pokemonJson: JSON.stringify(pokemonData.name),
      headlineJson: JSON.stringify(newsHeadlineData),
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
