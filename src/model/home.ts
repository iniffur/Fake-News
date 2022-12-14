class Checker {
  count: number;
  percentage: number;
  image: string;
  text: string;
  list: Array<string>;
  constructor(text: string) {
    this.text = text;
    this.count = 0;
    this.percentage = 0;
    this.image = "";
    this.list = [
      "to be",
      "in new",
      "exclaimed",
      "' said",
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
      "expected",
      "warns",
      "a source close",
      "to make them",
      "could face",
      "could be",
      "could have",
      "could save",
      "could earn",
      "should",
      "could",
      "would",
      "might",
      "possibly",
      "nightmare",
      "plans",
      "how to",
      "could this",
      "is this the",
      "are these the",
      "were these the",
      " - and",
    ];
  }
  check = () => {
    if (this.checkInput() === "invalid input") {
      return "invalid input";
    }
    this.checkInput();
    this.percentageCalculator();
    this.imageSelector();
    return [this.image, this.formatString()];
  };
  checkInput = () => {
    this.count = 0;

    if (this.text.trim().length <= 0) {
      return "invalid input";
    }
    if (this.text === "") {
      return "invalid input";
    } else if (this.text.split(" ").length <= 1) {
      return "invalid input";
    } else if (parseInt(this.text).toString() === this.text) {
      return "invalid input";
    } else if (typeof this.text !== "string") {
      return "invalid input";
    }

    this.list.forEach((item) => {
      if (this.text.toLowerCase().includes(item)) {
        this.count += 1;
      }
    });
    this.text.split(" ").forEach((item) => {
      if (isNaN(+item) === false) {
        this.count += 1;
      }
    });
    if (this.text.toUpperCase() === this.text) {
      this.count += 1;
    }
  };
  imageSelector = () => {
    if (this.percentage <= 10) {
      this.image = "https://i.imgur.com/8nXCwCN.jpg";
    } else if (this.percentage <= 30) {
      this.image = "https://i.imgur.com/iHSpK2m.jpg";
    } else if (this.percentage <= 50) {
      this.image = "https://i.imgur.com/0PtFy0H.jpg";
    } else {
      this.image = "https://i.imgur.com/6zuePPv.jpg";
    }
  };
  formatString = () => {
    const percentageString = `${Math.round(this.percentage)}% clickbait.`;
    const counterString = `This headline ticked ${this.count} of our clickbait boxes`;
    const outputString =
      this.percentage <= 20
        ? `${percentageString}\nSomewhat believable.\n${counterString}`
        : `${percentageString}\nTrash.\n${counterString}`;
    return outputString;
  };
  percentageCalculator = () => {
    this.percentage = (this.count / this.text.split(" ").length) * 100;
    if (this.percentage > 100) {
      this.percentage = 100;
    }
    return this.percentage;
  };
}

export default Checker;
