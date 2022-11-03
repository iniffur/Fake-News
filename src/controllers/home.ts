import { Request, Response } from "express";
import Checker from "../model/home";
import fetchPokemon from "../model/fetchPokemon";

const HomeController = {
  Index: async (req: Request, res: Response) => {
    const pokemonData = await fetchPokemon("Bulbasaur");
    res.render("home/index", {
      title: "This Reeks",
      pokemonJson: JSON.stringify(pokemonData),
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
