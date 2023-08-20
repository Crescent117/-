"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const { Schema } = mongoose_1.default;
const TrustBestItem = new Schema({
    src: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    alt: {
        type: String,
        required: true,
    },
    titleText: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});
const TrustBest = new Schema({
    trustBest: [TrustBestItem],
}, {
    timestamps: true,
    collection: "DealiciousFood",
});
module.exports = mongoose_1.default.model("TrustBest", TrustBest);
//# sourceMappingURL=trustBest.js.map