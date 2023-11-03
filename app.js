import express from "express"
import {config} from "dotenv"
import userRouter from "./routes/user_routes.js"
import { errorMiddleware } from "./middlewares/error.js";

export const app = express();


config({
    path:"./database/config.env",
})

// using middlewares

app.use(express.json());

//using routes

app.use("/api/v1/users",userRouter);


app.use(errorMiddleware);