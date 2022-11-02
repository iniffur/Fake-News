import express from "express";
const router = express.Router();
import HomeController from "../controllers/home";

router.get("/", HomeController.Index);
router.post("/", HomeController.Check);
// router.get("/result", HomeController.Result);

export default router;
