class Checker {
  count: number;
  percentage: number;
  text: string;
  list: Array<string>;
  constructor(text: string) {
    this.text = text;
    this.count = 0
    this.percentage = 0
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
    if (this.checkInput() === "invalid input") {return "invalid input"}
    this.checkInput()
    this.percentageCalculator()
    return this.formatString()
  }
  checkInput = () => {
    this.count = 0;
    if(this.text.trim().length <= 0){
      return "invalid input"
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
  formatString = () => {
    const percentageString = `${Math.round(this.percentage)}% bullshit.`;
    const counterString = `This headline ticked ${this.count} of our bullshit boxes`;
    const outputString =
      this.percentage <= 20
        ? `${percentageString}\nSomewhat believable.\n${counterString}`
        : `${percentageString}\nTrash.\n${counterString}`;
    return outputString;
  }
  percentageCalculator = () => {
    this.percentage = (this.count / this.text.split(" ").length) * 100;
    if (this.percentage > 100) {
      this.percentage = 100;
  }
  return this.percentage
}}

export default Checker;
