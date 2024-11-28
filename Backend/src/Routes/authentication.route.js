import express from "express";
import { signup } from "../Auth/signup.auth.js";
import { login } from "../Auth/login.auth.js";
import { logout } from "../Auth/logout.auth.js";
import { updateProfile } from "./updateProfile.route.js";
import { protectRoute } from "../Middleware/protect.middleware.js";
import { checkAuth } from "../Auth/check.auth.js";


export const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

authRouter.put("/update-profile", protectRoute, updateProfile);
authRouter.get("/check", protectRoute, checkAuth);

