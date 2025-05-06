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
require("dotenv/config");
const exerciseRouter_1 = __importDefault(require("./routers/exerciseRouter"));
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const exerciseRepository_1 = require("./modules/exercise/exerciseRepository");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use("/api/exercise", exerciseRouter_1.default);
const port = process.env.APP_PORT || 3000;
app.get("/", (req, res) => {
    res.send("On est heureux");
});
app.listen(port, () => __awaiter(void 0, void 0, void 0, function* () {
    console.log(`[server]: Server is running at http://localhost:${port}`);
    const result = yield exerciseRepository_1.ExerciseInstance.getOne("67bf61a7eec7567b0093726a");
    console.log(result);
}));
