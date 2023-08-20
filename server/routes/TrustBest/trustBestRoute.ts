const trustBestExpress = require("express");
const trustBestRouter = trustBestExpress.Router();
const TrustBestController = require("../../Controllers/TrustBest/trustBestController");

trustBestRouter.get("/trustBest", TrustBestController.getTrustBest);

module.exports = trustBestRouter;
