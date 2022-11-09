class Checker {
  count: number;
  percentage: number;
  image: string;
  text: string;
  unnecessaryWords: Array<string>;
  list: Array<string>;
  constructor(text: string) {
    this.text = text;
    this.count = 0
    this.percentage = 0
    this.image = ""
    this.unnecessaryWords = ["of", "for", "and", "the", "is", "has", "had", "did", "if", "in", "as", "was", "were", "to", "be", "after", "star", "she", "he", "they", "with", "will", "won't", "bit", "look", "who", "man", "woman", "could", "would", "streets", "can", "say", "mob", "must", "get", "cops", "message", "reveal", "I", "went", "but", "there", "twist", "fears", "over", "under", "within", "moment", "stood", "admits", "he'd", "she'd", "he's", "she's", "their", "they're", "their"]
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
      "claims",
      "claimed",
    ];
  }
  check = () => {
    if (this.checkInput() === "invalid input") {return "invalid input"}
    this.checkInput();
    this.percentageCalculator();
    this.imageSelector();
    return [this.image, this.formatString()]
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
  headlineExtractor = () => {
    let keyText = this.text
    if (this.text.includes("."))
{keyText = this.text.split(".")[0]}
return keyText.split(" ").filter(words => this.unnecessaryWords.indexOf(words) === -1).join(" ")
  }
  imageSelector = () => {
    if (this.percentage <= 10) {
      this.image =
        "https://drive.google.com/uc?export=view&id=1bHTWEpJKezOIc2AR8vj9EPoXiayjB3AS";
    } else if (this.percentage <= 30) {
      this.image =
        "https://drive.google.com/uc?export=view&id=1pGyUZQOkkkdYg_vMQs_U61tk35lk8KqK";
    } else if (this.percentage <= 50) {
      this.image =
        "https://drive.google.com/uc?export=view&id=1UY786Is-FlA2x5i-urDDg6LKOqSRLM2R";
    } else {
      this.image =
        "https://drive.google.com/uc?export=view&id=1ToGa3YmNtXEpFl3E2PqJYHyWLB-UJYDb";
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
