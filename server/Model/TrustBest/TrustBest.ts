import mongoose from "mongoose";
const { Schema } = mongoose;

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

const TrustBest = new Schema(
  {
    trustBest: [TrustBestItem],
  },
  {
    timestamps: true,
    collection: "DealiciousFood",
  }
);

module.exports = mongoose.model("TrustBest", TrustBest);
