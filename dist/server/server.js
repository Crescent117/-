"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const searchListRoute_1 = __importDefault(require("./routes/SearchList/searchListRoute"));
const trustBestRoute_1 = __importDefault(require("./routes/TrustBest/trustBestRoute"));
require("dotenv").config({ path: "dotenv.env" });
//서버 구동 및 DB연동에 필요한 데이터들
const express = require("express");
const app = express();
const cors = require("cors");
// cors 에러 회피
app.use(express.json());
app.use(cors());
//서버 연결되면 띄워지는 메시지
app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));
// MongoDB 연결
// 노출되면 안되는 정보들은 env에 저장
if (process.env.MONGO_URI !== undefined) {
    mongoose_1.default
        .connect(process.env.MONGO_URI)
        .then(() => console.log("Successfully connected to mongodb"))
        .catch((e) => console.error(e));
}
// 믿고 보는 맛집 리스트
app.use(trustBestRoute_1.default);
// 검색리스트
app.use(searchListRoute_1.default);
//# sourceMappingURL=server.js.map