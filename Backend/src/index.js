import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { authRouter } from "./Routes/authentication.route.js";
import { connectionDB } from "./Database/db.database.js";
import cors from "cors";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use( cors());

app.use("/api/auth", authRouter);

app.listen(PORT, ()=>{
    console.log("Server is running on port: " + PORT);
    connectionDB();
})