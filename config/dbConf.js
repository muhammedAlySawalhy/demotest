import config from "./config.js";
import mongoose from "mongoose";

const connectDB = () => {
  mongoose
    .connect(config.mongouri, {
      dbName: "HRSystem",
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("Error connecting to MongoDB:", error);
    });
};

export default connectDB;
