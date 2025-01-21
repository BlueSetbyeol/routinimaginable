import mysql from "mysql2/promise";

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

console.log(DB_PORT);
// Create the connection to database
const client = mysql.createPool({
	host: DB_HOST,
	port: Number.parseInt(DB_PORT as string),
	user: DB_USER,
	password: DB_PASSWORD,
	database: DB_NAME,
});

export default client;

// import type { Pool, ResultSetHeader, RowDataPacket } from "mysql2/promise";
