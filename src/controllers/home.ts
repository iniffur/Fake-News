import { Request, Response } from "express";
const array = ["do", "are", "?", "the best", "the worst", 'ultimate guide', 'why we love', 'why we hate', 'in my opinion', "you'll never believe", 'says', 'unnamed', 'are today', 'is today', 'where they', 'simple method', 'one trick', 'this is what happens', 'weird trick', 'why', 'reveals', "don't want you to know", Number];

const HomeController = {
  Index: (req: Request, res: Response) => {
    res.render("home/index", { title: "This Reeks" });
  },
  Check: (req: Request, res: Response) => {
    const text = req.body.headline;
    let count = 0;
    array.forEach(item => {
      text.toLowerCase().includes(item) ? count += 1 : console.log(`${item} not found`)
    })
    const wordCount = (count/text.split(" ").length)*100;
    const counterString = ` This headline ticked ${count} of our bullshit boxes`
    const percentageString = `${wordCount}% bullshit. `
    const outputString = wordCount <= 20 ? `${percentageString}Somewhat believable.${counterString}` : `${percentageString}Trash.${counterString}`
    res.render("home/result", { result: outputString, headline: text });
  },
};

export default HomeController;
