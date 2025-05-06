import client from "../../database/client";
import type { ExerciseModel } from "../../models/exerciseModel";

class ExerciseRepository {
	static typeExercie: string[] = ["travail", "échauffement", "étirement"];
	static instance: ExerciseRepository;
	static getInstance() {
		if (ExerciseRepository.instance) {
			return ExerciseRepository.instance;
		}
		ExerciseRepository.instance = new ExerciseRepository();
		return ExerciseRepository.instance;
	}

	async listAll(): Promise<ExerciseModel[]> {
		const database = client.db("routine_imaginable");
		const collection = database.collection<ExerciseModel>("exercise");

		const exercises = await collection.find().toArray();

		if (exercises.length === 0) {
			console.log("No documents found!");
		}

		return exercises;
	}
}

export const ExerciseInstance = ExerciseRepository.getInstance();
