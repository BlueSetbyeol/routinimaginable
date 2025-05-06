import "dotenv/config";
import exerciseRouter from "./routers/exerciseRouter";
import express, { type Express, type Request, type Response } from "express";
import dotenv from "dotenv";
import { ExerciseInstance } from "./modules/exercise/exerciseRepository";

dotenv.config();

const app: Express = express();

app.use("/api/exercise", exerciseRouter);

const port = process.env.APP_PORT || 3000;

app.get("/", (req: Request, res: Response) => {
	res.send("On est heureux");
});

app.listen(port, async () => {
	console.log(`[server]: Server is running at http://localhost:${port}`);
	const result = await ExerciseInstance.getOne("67bf61a7eec7567b0093726a");
	console.log(result);
});
