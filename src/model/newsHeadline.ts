import NewsHeadlineAPi from "./newsHeadlineApi";

class NewsHeadline {
  //TODO: chang API & result class type TS
  API: any;
  result: any;
  constructor(API: any) {
    this.API = API;
    this.result;
  }

  fetch() {
    this.API.fetchHeadlineData((response: any) => {
      this.result = response;
    });
  }

  getHeadlineData() {
    return this.result;
  }
}

export default NewsHeadline;
