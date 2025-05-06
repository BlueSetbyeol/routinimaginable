export type ExerciseModel = {
	id: number;
	name: string;
	image: string;
	category: ExerciseCategory;
	description: string;
};

export type ExerciseCategory = "travail" | "étirement" | "échauffement";
