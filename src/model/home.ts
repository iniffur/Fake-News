class Checker {
  text: string;
  list: Array<string>;
  constructor(text: string) {
    this.text = text;
    this.list = [
      "do",
      "are",
      "?",
      "best",
      "worst",
      "celebrities",
      "celebrity",
      "style",
      "women",
      "men",
      "hate",
      "our readers",
      "doctors",
      "trick",
      "!",
      "guide",
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
  }
  check = () => {
    if (this.text == "") {
      return "invalid input";
    } else if (this.text.split(" ").length === 1) {
      return "invalid input";
    } else if (parseInt(this.text).toString() === this.text) {
      return "invalid input";
    } else if (typeof this.text !== "string") {
      return "invalid input";
    }
    let count = 0;
    this.list.forEach((item) => {
      this.text.toLowerCase().includes(item)
        ? (count += 1)
        : // : console.log(`${item} not found`);
          (count = count + 0);
    });
    this.text.split(" ").forEach((item) => {
      // console.log(`number not found`);
      isNaN(+item) === false ? (count += 1) : (count = count + 0);
    });
    this.text.toUpperCase() === this.text
      ? (count += 1)
      : // : console.log("Not all caps");
        (count = count + 0);
    let percentageBullShit = (count / this.text.split(" ").length) * 100;
    if (percentageBullShit > 100) {
      percentageBullShit = 100;
      return [percentageBullShit, count];
    }
  };
  format = (array: any) => {
    const counterString = `This headline ticked ${array[1]} of our bullshit boxes`;
    const percentageString = `${array[0]}% bullshit.`;
    const outputString =
      array[0] <= 20
        ? `${percentageString}\nSomewhat believable.\n${counterString}`
        : `${percentageString}\nTrash.\n${counterString}`;
    return outputString;
  };
}

export default Checker;
