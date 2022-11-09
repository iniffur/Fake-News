import express from "express";
const router = express.Router();
import HomeController from "../controllers/home";

router.get("/", HomeController.Index);
// router.get("/GBHeadlines", HomeController.Index);
router.post("/", HomeController.Check);
router.post("/GBHeadlines", HomeController.GBHeadlines);
router.post("/USHeadlines", HomeController.USHeadlines);
export default router;
