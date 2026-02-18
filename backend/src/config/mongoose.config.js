import mongoose from "mongoose";
import config from "./environment.js";

export const connectDB = async () => {

  if (!config.dbURI) {
    throw new Error("Database URI is not defined in environment variables")
    process.exit(1)
  }

  try {
    await mongoose.connect(config.dbURI)
    console.log("Database connected successfully")

  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}