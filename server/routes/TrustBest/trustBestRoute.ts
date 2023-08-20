import express from "express";
const trustBestRouter = express.Router();
import { getTrustBest } from "../../Controllers/TrustBest/trustBestController";

trustBestRouter.get("/trustBest", getTrustBest);

export default trustBestRouter;
