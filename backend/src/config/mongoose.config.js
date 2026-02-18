import mongoose from "mongoose";
import "dotenv/config";

const options = {
  serverSelectionTimeoutMS: 60000, // Increase timeout
  connectTimeoutMS: 60000,
};

let isConnected;

export async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGODB_URI, options);
    isConnected = true;
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err;
  }
}


