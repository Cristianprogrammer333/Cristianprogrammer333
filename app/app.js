import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import enviroments from "./config/enviroments";

const app = express();

//settings
app.set("PORT", process.env.PORT);

//Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

export default app;