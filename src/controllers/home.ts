import { Request, Response } from "express";

const HomeController = {
  Index: (req: Request, res: Response) => {
    res.render("home/index", { title: "This Reeks" });
  },
  Check: (req: Request, res: Response) => {
    const text = req.body.headlineText;
    console.log(text);
    // const array = ["Do", "?"]
    const count = 0;
    // if (text.split("").last == array[1]) {count += 1}
    // if (text.split(" ")[0] == array[0]) {count += 1}
    console.log(count);
    res.render("home/result", { counter: count });
  },
};

export default HomeController;
