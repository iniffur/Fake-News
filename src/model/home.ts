class Checker {
  text: string;
  list: Array<string>;
  constructor(text: string) {
    this.text = text;
    this.list = [
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
        : console.log(`${item} not found`);
    });
    const percentageBullShit = (count / this.text.split(" ").length) * 100;
    const counterString = `This headline ticked ${count} of our bullshit boxes`;
    const percentageString = `${percentageBullShit}% bullshit.`;
    return [percentageBullShit, counterString, percentageString];
  };
}

export default Checker;
