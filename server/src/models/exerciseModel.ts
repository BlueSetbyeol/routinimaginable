import type { ObjectId } from "mongodb";

export type ExerciseModel = {
	_id: ObjectId;
	name: string;
	image: string;
	category: ExerciseCategory;
	description: string;
};

export type ExerciseCategory = "travail" | "étirement" | "échauffement";
