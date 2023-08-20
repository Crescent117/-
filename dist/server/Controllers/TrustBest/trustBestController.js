"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTrustBest = void 0;
const trustBest = require("../../Model/TrustBest/trustBest");
const getTrustBest = (req, res) => {
    trustBest
        .find({}, { _id: 0, trustBest: 1 })
        .then((data) => {
        if (!data) {
            res.status(404).json({ message: "No data found" });
        }
        else {
            res.status(200).json(data[0].trustBest);
        }
    })
        .catch((error) => {
        res.status(500).json({ message: "server error" });
    });
};
exports.getTrustBest = getTrustBest;
//# sourceMappingURL=trustBestController.js.map