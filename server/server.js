require("dotenv").config({ path: "dotenv.env" });

//서버 구동 및 DB연동에 필요한 데이터들
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

// cors 에러 회피
app.use(express.json());
app.use(cors());

//서버 연결되면 띄워지는 메시지
app.listen(process.env.PORT, () =>
  console.log(`Server listening on port ${process.env.PORT}`)
);


// MongoDB 연결
// 노출되면 안되는 정보들은 env에 저장
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Successfully connected to mongodb"))
  .catch((e) => console.error(e));


// 믿고 보는 맛집 리스트
const trustBestRoute = require("./routes/TrustBest/trustBestRoute");
app.use(trustBestRoute);

// 검색리스트
const searchListRoute = require("./routes/SearchList/searchListRoute");
app.use(searchListRoute);

