import GoogleApi from "./googleAPI";
import dotenv from "dotenv";
dotenv.config();

class Google {
  api: any;
  data: any;
  constructor(api: any) {
    this.api = api;
    this.data;
  }

  fetch(query: string) {
    this.api.fetchCheckerData(query, (response: any) => {
      this.data = response;
    });
  }

  getCheckerData() {
    return this.data;
  }
}

export default Google;

// script to make request
// const api = new GoogleApi();
// const google = new Google(api);
// google.fetch("trump won election");
// setTimeout((response: any) => {
//   response = google.getCheckerData();
//   console.log(response);
// }, 2000);
