"use strict";
const searchExpress = require("express");
const searchRouter = searchExpress.Router();
const searchListController = require("../../Controllers/SearchList/SearchListController");
searchRouter.get("/getSearchList/:keyword", searchListController.getSearchList);
module.exports = searchRouter;
//# sourceMappingURL=searchListRoute.js.map