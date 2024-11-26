import express from "express";
import { signup } from "../components/auth.components.js";

export const authRouter = express.Router();

authRouter.post("/signup", signup);


