import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    required: true,
  },
  phone: {
    type: Number,
    required: true,
    length: 10,
  },
  message: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export const Contact = mongoose.model("Contact", contactSchema);