import dotenv from "dotenv";
import express, { Express } from "express";
import path from "path";
import homeRouter from "./routes/home";
import bodyParser from "body-parser";
import http from "http";

// flash
// import flash from "express-flash";
// import createError from "http-errors";
// import cookieParser from "cookie-parser";
// import logger from "morgan";
// import session from "express-session";
// import methodOverride from "method-override";

dotenv.config();

const port = process.env.PORT || 3005;

const app: Express = express();

// setup for local store of newsHeadlines data and conditional news api fetch
const epochStartTime = new Date(0);
app.set("latestNewsApiFetchTimes", { gb: epochStartTime, us: epochStartTime });
let gbNewsHeadlines: any;
let usNewsHeadlines: any;
app.set("newsHeadlines", { gb: gbNewsHeadlines, us: usNewsHeadlines });

app.set("port", port);

app.use(express.static(__dirname + "/public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
);
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
// app.use(flash());
app.use("/", homeRouter);
// app.use("/result", homeRouter);

// app.listen(port, () => {
//   console.log(`server started at with port number ${port}`);
// });

app.get("/", (req, res) => res.type('html').send(html));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`

export default app;
