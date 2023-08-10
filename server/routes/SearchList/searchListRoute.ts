const searchExpress = require("express");
const searchRouter = searchExpress.Router();
const searchListController = require("../../Controllers/SearchList/SearchListController");

searchRouter.get("/getSearchList/:keyword", searchListController.getSearchList);
console.log("여긴왔니")
module.exports = searchRouter;
