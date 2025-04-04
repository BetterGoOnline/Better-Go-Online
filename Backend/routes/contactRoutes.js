import express from "express";
const router = express.Router();
import { sendContactForm } from "../controllers/contactControllers.js";

router.post("/", sendContactForm);

export default router;