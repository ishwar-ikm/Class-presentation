import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import { connectToDB } from "./db/connectToDB.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.resolve();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

if(process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  })
}

app.listen(PORT, () => {
  connectToDB();
  console.log(`Server is running on port ${PORT}`);
})