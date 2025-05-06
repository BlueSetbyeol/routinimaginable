import { ObjectId, type WithoutId, type Collection } from "mongodb";
import database from "../../database/client";
import type { ExerciseModel } from "../../models/exerciseModel";

class ExerciseRepository {
	static typeExercie: string[] = ["travail", "échauffement", "étirement"];
	static instance: ExerciseRepository;
	collection: Collection<WithoutId<ExerciseModel>>;

	constructor() {
		this.collection = database.collection<WithoutId<ExerciseModel>>("exercise");
	}

	static getInstance() {
		if (ExerciseRepository.instance) {
			return ExerciseRepository.instance;
		}
		ExerciseRepository.instance = new ExerciseRepository();
		return ExerciseRepository.instance;
	}

	async listAll(): Promise<ExerciseModel[]> {
		const exercises = await this.collection.find().toArray();

		if (exercises.length === 0) {
			console.log("No documents found!");
		}
		return exercises;
	}

	async getOne(id: string): Promise<ExerciseModel | undefined> {
		const exercise = await this.collection.findOne({ _id: new ObjectId(id) });
		if (!exercise) {
			console.log("No exercise found");
			return undefined;
		}
		return exercise;
	}

	async addOne(
		exercise: WithoutId<ExerciseModel>,
	): Promise<ObjectId | undefined> {
		const newExercise = await this.collection.insertOne(exercise);

		if (!newExercise) {
			console.log("No exercise added");
			return undefined;
		}
		return newExercise.insertedId;
	}

	async update(
		id: string,
		exercise: WithoutId<Partial<ExerciseModel>>,
	): Promise<ObjectId | undefined> {
		const updatedExercise = await this.collection.updateOne(
			{ _id: new ObjectId(id) },
			{
				$set: { exercise },
			},
		);

		if (!updatedExercise || !updatedExercise.upsertedId) {
			console.log("No exercise changed");
			return undefined;
		}
		return updatedExercise.upsertedId;
	}

	async delete(id: string) {
		const deletedExercise = await this.collection.deleteOne({
			_id: new ObjectId(id),
		});
		if (deletedExercise.deletedCount === 1) {
			console.log("Successfully deleted the exercise.");
		} else {
			console.log("No exercises matched the query. Deleted 0 exercise.");
		}
	}
}

export const ExerciseInstance = ExerciseRepository.getInstance();
