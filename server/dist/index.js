"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const exerciseRepository_1 = require("./modules/exercise/exerciseRepository");
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.APP_PORT || 3000;
app.get("/", (req, res) => {
    res.send("On est heureux");
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    exerciseRepository_1.ExerciseInstance.listAll();
});
