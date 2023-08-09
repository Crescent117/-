const trustBestExpress = require("express");
const trustBestRouter = trustBestExpress.Router();
const TrustBestController = require("../../Controllers/TrustBest/TrustBestController");

trustBestRouter.get("/trustBest", TrustBestController.getTrustBest);

module.exports = trustBestRouter;
