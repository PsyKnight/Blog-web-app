import express from "express";
import pg from "pg";
import bodyParser from "body-parser";

const port = 3000;
const app = express();
const db = new pg.Client({
	user: "postgres",
	password: "idk2005",
	host: "localhost",
	port: "5432",
	database: "blog"
});

db.connect();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));