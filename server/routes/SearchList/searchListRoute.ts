import express from "express";
const searchRouter = express.Router();
import { getSearchList } from "../../Controllers/SearchList/searchListController";


searchRouter.get("/getSearchList/:keyword", getSearchList);

export default searchRouter;
