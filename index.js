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

app.get("/",async (req, res) => {
const result = await db.query(
	`SELECT *
	FROM blogs
	JOIN users
	ON users.id = user_id`
);
	console.log(result.rows);
	res.render("index.ejs",{ blogs: result.rows });
})

app.listen(port, () => {
	console.log("Listening on port", port);
})