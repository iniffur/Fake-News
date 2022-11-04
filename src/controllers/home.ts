import { Request, Response } from "express";
import Checker from "../model/home";
import fetchGoogleData from "../model/fetchGoogleData";

import dotenv from "dotenv";
dotenv.config();

const googleDataApiKey = process.env.GOOGLE_DATA_API_KEY;

const HomeController = {
  Index: async (req: Request, res: Response) => {
    // const query = "Trump won election";
    // const googleData = await fetchGoogleData(
    //   `https://factchecktools.googleapis.com/v1alpha1/claims:search?key=${googleDataApiKey}&query=${query}`
    // );

    const googleData: any = [];
    trumpHeadlines.claims.forEach((item) => {
      googleData.push(item.claimReview[0].textualRating);
    });
    res.render("home/index", {
      title: "This Reeks",
      googleContent: googleData,
    });
  },
  Check: (req: Request, res: Response) => {
    const text = req.body.headline;
    const outputString = new Checker(text).check();

    console.log("displaying");
    res.render("home/result", {
      result: outputString,
      headline: text,
      title: "This Reeks",
    });
  },

  // Result: (req: Request, res: Response) => {
  //   res.render("home/result", { title: "This Reeks" });
  // },
};

const trumpHeadlines = {
  claims: [
    {
      text: "King Charles III signed a proclamation saying Trump won the 2020 election",
      claimant: "Social media",
      claimDate: "2022-09-10T00:00:00Z",
      claimReview: [
        {
          publisher: { name: "USA Today", site: "usatoday.com" },
          url: "https://www.usatoday.com/story/news/factcheck/2022/09/19/fact-check-false-claim-king-charles-iii-said-trump-won-2020/10370347002/",
          title:
            "Fact check: False claim that King Charles III said Trump won the ...",
          reviewDate: "2022-09-19T20:53:55Z",
          textualRating: "False",
          languageCode: "en",
        },
      ],
    },
    {
      text: "King Charles III signed “a proclamation stating that Donald Trump won the 2020 presidential election and is the rightful president by law.”",
      claimant: "Facebook post",
      claimDate: "2022-09-11T00:00:00Z",
      claimReview: [
        {
          publisher: { name: "PolitiFact", site: "politifact.com" },
          url: "https://www.politifact.com/factchecks/2022/sep/12/facebook-posts/king-charles-iii-didnt-declare-trump-winner-2020-e/",
          title:
            "King Charles III didn't declare Trump winner of the 2020 election",
          textualRating: "Pants on Fire",
          languageCode: "en",
        },
      ],
    },
    {
      text: "The 2020 presidential election was 'rigged'",
      claimant: "Donald Trump, social media users",
      claimDate: "2022-01-06T00:00:00Z",
      claimReview: [
        {
          publisher: { name: "USA Today", site: "usatoday.com" },
          url: "https://www.usatoday.com/story/news/factcheck/2022/01/06/fact-check-donald-trump-2020-election-results/9115875002/",
          title:
            "Fact check: Donald Trump persists with false claim about 2020 results",
          reviewDate: "2022-01-06T20:45:43Z",
          textualRating: "False",
          languageCode: "en",
        },
      ],
    },
    {
      text: "Rep. Adam Kinzinger “admits Trump won” the 2020 presidential election.",
      claimant: "Facebook posts",
      claimDate: "2022-08-15T00:00:00Z",
      claimReview: [
        {
          publisher: { name: "PolitiFact", site: "politifact.com" },
          url: "https://www.politifact.com/factchecks/2022/aug/17/facebook-posts/no-kinzinger-didnt-say-trump-won-election/",
          title: "No, Kinzinger didn’t say Trump won the election",
          textualRating: "False",
          languageCode: "en",
        },
      ],
    },
    {
      text: "More than 8 million excess votes for Biden counted during the 2020 election",
      claimant: "Gateway Pundit",
      claimDate: "2021-08-02T00:00:00Z",
      claimReview: [
        {
          publisher: { name: "USA Today", site: "usatoday.com" },
          url: "https://www.usatoday.com/story/news/factcheck/2021/08/10/fact-check-8-million-excess-biden-votes-werent-counted-2020/5512962001/",
          title:
            "Fact check: 8 million 'excess' Biden votes weren't counted in 2020",
          reviewDate: "2021-08-10T15:26:59Z",
          textualRating: "False",
          languageCode: "en",
        },
      ],
    },
    {
      text: "Image of Times Square billboard reads 'Trump won'",
      claimant: "Social media users",
      claimDate: "2021-10-30T00:00:00Z",
      claimReview: [
        {
          publisher: { name: "USA Today", site: "usatoday.com" },
          url: "https://www.usatoday.com/story/news/factcheck/2021/11/04/fact-check-times-square-billboard-image-altered-say-trump-won/6284378001/",
          title:
            "Fact check: Times Square billboard altered to falsely claim Trump ...",
          reviewDate: "2021-11-05T03:21:36Z",
          textualRating: "Altered",
          languageCode: "en",
        },
      ],
    },
    {
      text: '"Trump Won Two-Thirds of Election Lawsuits Where Merits Considered"',
      claimant: "Bloggers",
      claimDate: "2021-02-07T00:00:00Z",
      claimReview: [
        {
          publisher: { name: "PolitiFact", site: "politifact.com" },
          url: "https://www.politifact.com/factchecks/2021/feb/09/blog-posting/trump-did-not-win-two-thirds-election-lawsuits-whe/",
          title:
            "Trump did not win two-thirds of election lawsuits ‘where merits ...",
          textualRating: "False",
          languageCode: "en",
        },
      ],
    },
    {
      text: "Hallie Biden said Donald Trump won the 2020 election",
      claimant: "Social media users",
      claimDate: "2022-08-30T00:00:00Z",
      claimReview: [
        {
          publisher: { name: "USA Today", site: "usatoday.com" },
          url: "https://www.usatoday.com/story/news/factcheck/2022/09/19/fact-check-fake-hallie-biden-tweet-purportedly-supports-donald-trump-2020-election/7974448001/",
          title:
            "Fact check: Fake Hallie Biden tweet purportedly supports Donald ...",
          reviewDate: "2022-09-20T01:19:41Z",
          textualRating: "False",
          languageCode: "en",
        },
      ],
    },
    {
      text: "Sidney Powell said Donald Trump won the election by a landslide",
      claimant: "Social media users",
      claimDate: "2020-11-19T00:00:00Z",
      claimReview: [
        {
          publisher: { name: "USA Today", site: "usatoday.com" },
          url: "https://www.usatoday.com/story/news/factcheck/2020/11/24/fact-check-false-claim-trump-won-election-by-landslide/6360883002/",
          title:
            "Fact check: Trump lawyer Sidney Powell falsely stated he won ...",
          reviewDate: "2020-11-24T20:30:03Z",
          textualRating: "Missing Context",
          languageCode: "en",
        },
      ],
    },
    {
      text: '“The Left and the Democrats were calling for alternate electors after the 2016 election."',
      claimant: "Social media posts",
      claimDate: "2022-06-22T00:00:00Z",
      claimReview: [
        {
          publisher: { name: "FactCheck.org", site: "factcheck.org" },
          url: "https://www.factcheck.org/2022/06/post-misleadingly-equates-2016-democratic-effort-to-trumps-2020-alternate-electors/",
          title:
            "Post Misleadingly Equates 2016 Democratic Effort to Trump's 2020 ...",
          textualRating: "Misleading",
          languageCode: "en",
        },
      ],
    },
  ],
  nextPageToken: "CAo",
};

export default HomeController;
