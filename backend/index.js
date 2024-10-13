import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { connectToDB } from "./db/connectToDB.js";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectToDB();
  console.log(`Server is running on port ${PORT}`);
})