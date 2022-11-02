import dotenv from "dotenv";
import express, { Express } from "express";
import path from "path";
import homeRouter from "./routes/home";
import bodyParser from "body-parser";
// import createError from "http-errors";
// import cookieParser from "cookie-parser";
// import logger from "morgan";
// import session from "express-session";
// import methodOverride from "method-override";

dotenv.config();

const port = process.env.SERVER_PORT;

const app: Express = express();

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
app.use("/", homeRouter);
// app.use("/result", homeRouter);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
