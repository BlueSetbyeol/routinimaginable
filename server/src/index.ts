import "dotenv/config";

import express, { type Express, type Request, type Response } from "express";
import dotenv from "dotenv";
import { ExerciseInstance } from "./modules/exercise/exerciseRepository";

dotenv.config();

const app: Express = express();
const port = process.env.APP_PORT || 3000;

app.get("/", (req: Request, res: Response) => {
	res.send("On est heureux");
});

app.listen(port, () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
	ExerciseInstance.listAll();
});
