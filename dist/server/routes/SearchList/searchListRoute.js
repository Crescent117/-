"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const searchRouter = express_1.default.Router();
const searchListController_1 = require("../../Controllers/SearchList/searchListController");
searchRouter.get("/getSearchList/:keyword", searchListController_1.getSearchList);
exports.default = searchRouter;
//# sourceMappingURL=searchListRoute.js.map