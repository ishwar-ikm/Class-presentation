import express from "express";
import { entry, getEntry } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/entry", entry);
router.get("/entry", getEntry);

export default router;