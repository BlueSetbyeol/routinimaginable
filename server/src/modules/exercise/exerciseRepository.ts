import type { Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise";
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
		const [exercise] = await client.query("select * from exercise");
		return exercise as ExerciseModel[];
	}
}

export const ExerciseInstance = ExerciseRepository.getInstance();
