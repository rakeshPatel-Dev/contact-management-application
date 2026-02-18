import express from "express";
import contacts from "./routes/contact.route.js"
const app = express();



app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running");
})

app.use("/api/contacts", contacts)

export default app