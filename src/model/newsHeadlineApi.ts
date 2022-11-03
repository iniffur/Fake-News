import got from "got";
import dotenv from "dotenv";
dotenv.config();

const apiKey = process.env.NEWS_HEADLINES_API_KEY;

class NewsHeadlineAPi {
  url: string;
  constructor() {
    this.url = `https://newsapi.org/v2/everything?q=keyword&apiKey=`;
  }

  // TODO: change datatype for callback
  fetchHeadlineData(callback: any) {
    got(this.url + apiKey).then((response) => {
      const result = JSON.parse(response.body);
      callback(result);
    });
  }
}
export default NewsHeadlineAPi;
