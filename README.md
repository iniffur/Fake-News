# This Reeks!

When it comes to misinformation online, it's very easy to be swayed or confused when reading an article. The question we're answering is:

'How much can I trust what I'm reading?'

We offer a multi-faceted approach to determining the trustworthiness of a headline or short article, ranging from a local buzzword check, to a machine learning political bias AI.

Simply take your text, paste it in, submit and find out how much This Reeks!

This is a Node.js project which verfies the potential legitimacy of a source's information based on it's content and 'journalistic choices'.

## Tech Stack

### Languages

<div align="left">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/>
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/>
    <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"/> 
    <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white"/>
    </div>

### Frameworks/Libraries

<div align="left">
  <img src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
    <img src="https://img.shields.io/static/v1?style=for-the-badge&message=Bootstrap&color=7952B3&logo=Bootstrap&logoColor=FFFFFF&label="/>
      <img src="https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white"/>
  <img src="https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e"/>
  
  </div>
  </br>

Created by
[Jason Boylan](https://github.com/Vanboylan),
[Abdullah Daoub](https://github.com/adaoub),
[Dimitar Dramchev](https://github.com/ddrmv), and
[James Ruffini](https://github.com/iniffur)
<br>

## Demo

https://user-images.githubusercontent.com/34510364/214370552-42e2baa4-a2d5-4dbc-961d-c803dccf26cd.mp4

## APIs used

- [Text Sentiment Analysis](https://rapidapi.com/gaurmanojkumar530/api/text-analysis12)
- [Political Bias](https://www.thebipartisanpress.com/political-bias-api-and-integrations/)
- [Emotional Analysis](https://rapidapi.com/KarstenT/api/emodex-emotions-analysis/)
- [Google Fact Checker](https://developers.google.com/fact-check/tools/api)
- [News Headline API](https://newsapi.org/)

## Installation and setup

```bash
git clone https://github.com/iniffur/Fake-News.git
cd Fake-News
touch .env
```

Insert into the file `.env` the settings:

```
NODE_ENV=development
SERVER_PORT=3030
```

Run

```bash
npm install
```

To run linter

```bash
npm run lint
```

To compile/build

```bash
npm run build
```

To run dev environment execute the below command, then open `http://localhost:3030`

```bash
npm run dev
```

To run unit tests

```bash
npm test
```
