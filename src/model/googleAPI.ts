import got from "got";
import dotenv from "dotenv";
dotenv.config();
const googleApiKey = process.env.GOOGLE_API;

class GoogleApi {
  url: string;

  constructor() {}

  fetchCheckerData(query: string, callback: any) {
    got(
      `https://factchecktools.googleapis.com/v1alpha1/claims:search?key=${googleApiKey}&query=${query}`
    ).then((response) => {
      const data = JSON.parse(response.body);
      callback(data);
    });
  }
}

export default GoogleApi;

//using the class
// const api = new GoogleApi();
// api.fetchCheckerData("trump won the election", (repositoryData: any) => {
//   console.log(repositoryData);
// });
