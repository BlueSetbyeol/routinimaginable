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
const client_1 = __importDefault(require("../../database/client"));
class ExerciseRepository {
    static getInstance() {
        if (ExerciseRepository.instance) {
            return ExerciseRepository.instance;
        }
        ExerciseRepository.instance = new ExerciseRepository();
        return ExerciseRepository.instance;
    }
    listAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const [exercise] = yield client_1.default.query("select * from exercise");
            return exercise;
        });
    }
}
ExerciseRepository.typeExercie = ["travail", "échauffement", "étirement"];
exports.ExerciseInstance = ExerciseRepository.getInstance();
