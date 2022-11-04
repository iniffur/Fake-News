import { Request, Response } from "express";
import Checker from "../model/home";
import fetchNewsHeadline from "../model/fetchNewsHeadline";

import dotenv from "dotenv";
dotenv.config();

const newsHeadlineApiKey = process.env.NEWS_HEADLINES_API_KEY;

const HomeController = {
  Index: async (req: Request, res: Response) => {
    // const newsHeadlineData = await fetchNewsHeadline(
    //   `https://newsapi.org/v2/top-headlines?country=gb&apiKey=${newsHeadlineApiKey}`
    // );
    const newsHeadlineData = ukNewsHeadlines;

    res.render("home/index", {
      title: "This Reeks",
      headlineJson: JSON.stringify(newsHeadlineData),
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

const ukNewsHeadlines = {
  status: "ok",
  totalResults: 0,
  articles: [
    {
      title:
        "UN chief warns ‘we will be doomed’ without historic climate pact - The Guardian",
      author: "Fiona Harvey",
      source: { Id: null, Name: "The Guardian" },
      publishedAt: "2022-11-04T12:17:00Z",
      url: "https://www.theguardian.com/environment/2022/nov/04/un-chief-antonio-guterres-climate-crisis-cop27",
    },
    {
      title: "French parliament halted as MP shouts 'go back to Africa' - BBC",
      author: "https://www.facebook.com/bbcnews",
      source: { Id: null, Name: "BBC News" },
      publishedAt: "2022-11-04T12:14:57Z",
      url: "https://www.bbc.com/news/world-asia-63507371",
    },
    {
      title:
        "T20 World Cup 2022 Super 12s: Australia beat Afghanistan by four runs – as it happened - The Guardian",
      author: "https://www.theguardian.com/profile/jonathan-howcroft",
      source: { Id: null, Name: "The Guardian" },
      publishedAt: "2022-11-04T12:12:09Z",
      url: "https://www.theguardian.com/sport/live/2022/nov/04/t20-world-cup-cricket-australia-vs-afghanistan-live-scores-updates-2022-super-12-12s-scorecard-aus-v-afg-latest-score",
    },
    {
      title:
        "England team: Owen Farrell to captain and Eddie Jones hands test debut to Alex Coles - The Telegraph",
      author: null,
      source: { Id: null, Name: "Telegraph.co.uk" },
      publishedAt: "2022-11-04T12:11:15Z",
      url: "https://www.telegraph.co.uk/rugby-union/2022/11/04/england-team-v-argentina-live-news-eddie-jones-picks-23-autumn",
    },
    {
      title: "Money-off energy scheme launches to avoid blackouts - BBC",
      author: "https://www.facebook.com/bbcnews",
      source: { Id: "bbc-news", Name: "BBC News" },
      publishedAt: "2022-11-04T12:02:40Z",
      url: "https://www.bbc.co.uk/news/business-63483668",
    },
    {
      title:
        "English National Opera hit by major funding cut and may move to Manchester - BBC",
      author: "https://www.facebook.com/bbcnews",
      source: { Id: "bbc-news", Name: "BBC News" },
      publishedAt: "2022-11-04T11:55:11Z",
      url: "https://www.bbc.co.uk/news/entertainment-arts-63512050",
    },
    {
      title:
        "Will Ferrell stars as Buddy the Elf in Asda's Christmas advert - Sky News",
      author: "Bethany Minelle",
      source: { Id: null, Name: "Sky.com" },
      publishedAt: "2022-11-04T11:24:43Z",
      url: "https://news.sky.com/story/will-ferrell-stars-as-buddy-the-elf-in-asdas-christmas-advert-12737985",
    },
    {
      title:
        "Wolves to be shot with paintballs in the Netherlands to make them less tame - Sky News",
      author: "Sky",
      source: { Id: null, Name: "Sky.com" },
      publishedAt: "2022-11-04T10:45:31Z",
      url: "https://news.sky.com/story/wolves-to-be-shot-with-paintballs-in-the-netherlands-to-make-them-less-tame-12737956",
    },
    {
      title:
        "Rishi Sunak expected to shelve plans to privatise Channel 4 - Financial Times",
      author: "Jim Pickard, Alex Barker, Jasmine Cameron-Chileshe",
      source: { Id: "financial-times", Name: "Financial Times" },
      publishedAt: "2022-11-04T10:30:00Z",
      url: "https://www.ft.com/content/2898cce0-42b0-4e5e-b59a-46996229061a",
    },
    {
      title:
        "China’s Xi warns Putin not to use nuclear arms in Ukraine - POLITICO Europe",
      author: "Stuart Lau",
      source: { Id: null, Name: "POLITICO.eu" },
      publishedAt: "2022-11-04T10:17:20Z",
      url: "https://www.politico.eu/article/china-xi-jinping-warns-vladimir-putin-not-to-use-nuclear-arms-in-ukraine-olaf-scholz-germany-peace-talks/",
    },
    {
      title:
        "‘My heart is racing, I’m terrified’: Cat Power on recreating Bob Dylan’s infamous 1966 ‘electric’ gig - The Guardian",
      author: "Laura Barton",
      source: { Id: null, Name: "The Guardian" },
      publishedAt: "2022-11-04T10:00:00Z",
      url: "https://www.theguardian.com/music/2022/nov/04/my-heart-is-racing-im-terrified-cat-power-on-recreating-bob-dylans-infamous-1966-electric-gig",
    },
    {
      title:
        "Hundreds of workers to strike at Heathrow Airport in run-up to World Cup - Sky News",
      author: "James Sillars",
      source: { Id: null, Name: "Sky.com" },
      publishedAt: "2022-11-04T09:53:48Z",
      url: "https://news.sky.com/story/hundreds-of-workers-to-strike-at-heathrow-airport-in-run-up-to-world-cup-12737966",
    },
    {
      title:
        "Manchester United could face a fixture nightmare after Europa League failure - Daily Mail",
      author: "Adam Shergold",
      source: { Id: null, Name: "Daily Mail" },
      publishedAt: "2022-11-04T09:34:08Z",
      url: "https://www.dailymail.co.uk/sport/football/article-11389707/Manchester-United-face-fixture-nightmare-Europa-League-failure.html",
    },
    {
      title:
        "Minister says it’s ‘a bit of a cheek’ for asylum-seekers to complain about conditions - The Guardian",
      author: "Jamie Grierson",
      source: { Id: null, Name: "The Guardian" },
      publishedAt: "2022-11-04T09:24:00Z",
      url: "https://www.theguardian.com/uk-news/2022/nov/04/minister-says-bit-of-a-cheek-for-asylum-seekers-to-complain-about-conditions",
    },
    {
      title:
        "Stormont election will not be held in December, Northern Ireland secretary says - Sky News",
      author: "Sky",
      source: { Id: null, Name: "Sky.com" },
      publishedAt: "2022-11-04T09:06:24Z",
      url: "https://news.sky.com/story/assembly-election-in-northern-ireland-will-not-be-held-in-december-secretary-of-state-says-12737899",
    },
    {
      title: "Glastonbury Festival coach packages sell out in 23 minutes - BBC",
      author: "https://www.facebook.com/bbcnews",
      source: { Id: null, Name: "BBC News" },
      publishedAt: "2022-11-04T08:47:15Z",
      url: "https://www.bbc.com/news/uk-england-somerset-63510423",
    },
    {
      title:
        "Rise in capital gains tax on the cards as Chancellor Hunt scrambles to raise £50bn - City A.M.",
      author: "Michiel Willems",
      source: { Id: null, Name: "City A.M." },
      publishedAt: "2022-11-04T07:01:40Z",
      url: "https://www.cityam.com/rise-in-capital-gains-tax-on-the-cards-as-chancellor-hunt-scrambles-to-raise-50bn/",
    },
    {
      title:
        "Interest rates UK – latest: Hunt ‘weighs rise in capital gains tax’ to plug £50bn black hole - The Independent",
      author: "Namita Singh",
      source: { Id: "independent", Name: "Independent" },
      publishedAt: "2022-11-04T06:30:33Z",
      url: "https://www.independent.co.uk/news/uk/home-news/uk-interest-rates-savings-mortgage-latest-b2217418.html",
    },
    {
      title:
        "Everton suffer more VAR agony as Frank Lampard faces obvious Anthony Gordon and Demarai Gray question - Liverpool Echo",
      author: "Connor O'Neill",
      source: { Id: null, Name: "Liverpool Echo" },
      publishedAt: "2022-11-04T05:59:00Z",
      url: "https://www.liverpoolecho.co.uk/sport/football/football-news/everton-suffer-more-var-agony-25427577",
    },
  ],
};

export default HomeController;
