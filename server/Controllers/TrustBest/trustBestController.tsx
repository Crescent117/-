const trustBest = require("../../Model/TrustBest/trustBest");
import { Request, Response } from "express";

export const getTrustBest = (req: Request, res: Response) => {
  trustBest
    .find({}, { _id: 0, trustBest: 1 })
    .then((data:any[]) => {
      if (!data) {
        res.status(404).json({ message: "No data found" });
      } else {
        res.status(200).json(data[0].trustBest);
      }
    })
    .catch((error:unknown) => {
      res.status(500).json({ message: "server error" });
    });
};


