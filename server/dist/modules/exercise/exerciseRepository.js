"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseInstance = void 0;
const mongodb_1 = require("mongodb");
const client_1 = __importDefault(require("../../database/client"));
class ExerciseRepository {
    constructor() {
        this.collection = client_1.default.collection("exercise");
    }
    static getInstance() {
        if (ExerciseRepository.instance) {
            return ExerciseRepository.instance;
        }
        ExerciseRepository.instance = new ExerciseRepository();
        return ExerciseRepository.instance;
    }
    listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const exercises = yield this.collection.find().toArray();
            if (exercises.length === 0) {
                console.log("No documents found!");
            }
            return exercises;
        });
    }
    getOne(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const exercise = yield this.collection.findOne({ _id: new mongodb_1.ObjectId(id) });
            if (!exercise) {
                console.log("No exercise found");
                return undefined;
            }
            return exercise;
        });
    }
    addOne(exercise) {
        return __awaiter(this, void 0, void 0, function* () {
            const newExercise = yield this.collection.insertOne(exercise);
            if (!newExercise) {
                console.log("No exercise added");
                return undefined;
            }
            return newExercise.insertedId;
        });
    }
    update(id, exercise) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedExercise = yield this.collection.updateOne({ _id: new mongodb_1.ObjectId(id) }, {
                $set: { exercise },
            });
            if (!updatedExercise || !updatedExercise.upsertedId) {
                console.log("No exercise changed");
                return undefined;
            }
            return updatedExercise.upsertedId;
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedExercise = yield this.collection.deleteOne({
                _id: new mongodb_1.ObjectId(id),
            });
            if (deletedExercise.deletedCount === 1) {
                console.log("Successfully deleted the exercise.");
            }
            else {
                console.log("No exercises matched the query. Deleted 0 exercise.");
            }
        });
    }
}
ExerciseRepository.typeExercie = ["travail", "échauffement", "étirement"];
exports.ExerciseInstance = ExerciseRepository.getInstance();
