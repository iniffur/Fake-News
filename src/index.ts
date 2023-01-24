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

const server = http.createServer(app);
server.listen(port);
server.on("listening", onListening);

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  console.log("Now listening on " + bind);
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


export default app;
