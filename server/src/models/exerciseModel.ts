export type ExerciseModel = {
	id: number;
	name: string;
	image: string;
	category: ExerciseCategory;
};

export type ExerciseCategory = "travail" | "étirement" | "échauffement";
