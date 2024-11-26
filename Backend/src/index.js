import express from "express";
import dotenv from "dotenv";
import { authRouter } from "./routes/auth.route.js";
import { connectionDB } from "./Database/db.database.js";

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
 
app.use("/api/auth", authRouter);

app.listen(PORT, ()=>{
    console.log("Server is running on port: " + PORT);
    connectionDB();
})