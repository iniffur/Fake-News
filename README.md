# This Reeks!

When it comes to misinformation online, it's very easy to be swayed or confused when reading an article. The question we're answering is:

'How much can I trust what I'm reading?'

We offer a multi-faceted approach to determining the trustworthiness of a headline or short article, ranging from a local buzzword check, to a machine learning political bias AI.

Simply take your text, paste it in, submit and find out how much This Reeks!



This is a Node.js project which verfies the potential legitimacy of a source's information based on it's content and 'journalistic choices'.

Used technologies include:

- [Typescript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/) web framework for Node.js.
- [Nodemon](https://nodemon.io/) to reload the server automatically.
- [EJS](https://ejs.co/) to render view templates.
- [Mongoose](https://mongoosejs.com) to model objects in MongoDB.
- [ESLint](https://eslint.org) for linting.
- [Jest](https://jestjs.io/) for testing.
- [Cypress](https://www.cypress.io/) for end-to-end testing.
- [Bootstrap](https://getbootstrap.com/) for styling

Created by
[Jason Boylan](https://github.com/Vanboylan),
[Abdullah Daoub](https://github.com/adaoub),
[Dimitar Dramchev](https://github.com/ddrmv), and
[James Ruffini](https://github.com/iniffur)

https://dis-reeks.herokuapp.com/

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
