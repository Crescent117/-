"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const trustBestRouter = express_1.default.Router();
const trustBestController_1 = require("../../Controllers/TrustBest/trustBestController");
trustBestRouter.get("/trustBest", trustBestController_1.getTrustBest);
exports.default = trustBestRouter;
//# sourceMappingURL=trustBestRoute.js.map