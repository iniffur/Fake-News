import dotenv from "dotenv";
import express, {Express, Request, Response} from "express";
import path from "path";
import homeRouter from "./routes/home";
// import createError from "http-errors";
// import cookieParser from "cookie-parser";
// import logger from "morgan";
// import session from "express-session";
// import methodOverride from "method-override";

dotenv.config();

const port = process.env.SERVER_PORT;


const app: Express = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.get("/", (req: Request, res: Response) => {
  res.render("index");
});

app.use(
  "/css",
  express.static(path.join(__dirname, "node_modules/bootstrap/dist/css"))
)

app.use("/home", homeRouter);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});

export default app;
