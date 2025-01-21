"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_1 = __importDefault(require("mysql2/promise"));
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
console.log(DB_PORT);
// Create the connection to database
const client = promise_1.default.createPool({
    host: DB_HOST,
    port: Number.parseInt(DB_PORT),
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
});
exports.default = client;
// import type { Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise";
