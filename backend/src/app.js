import express from "express";
import contacts from "./routes/contact.route.js"
import cors from 'cors'

const app = express();

app.use(express.json());
app.use(cors())

app.get("/", (req, res) => {
  res.send("API is running");
})

app.use("/api/contacts", contacts)

export default app