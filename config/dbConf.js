import config from "./config.js";
import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect(config.mongouri, { dbName: "HRSystem" });
};

export default connectDB;
