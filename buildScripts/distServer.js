import express from "express";
import path from "path";
import open from "open";
import compression from "compression";

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());

app.use(express.static("dist"));

app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.get("/users", function(req, res) {
	//Hard coding for simplicity.  Assume this hits a real DB.
	res.json([
		{"id":1, "firstName":"Chris", "lastName":"Biles", "email":"chris@crazykentucky.com"},
		{"id":2, "firstName":"David", "lastName":"Biles", "email":"david@crazykentucky.com"},
		{"id":3, "firstName":"Clinton", "lastName":"Biles", "email":"clinton@crazykentucky.com"}
	]);
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open("http://localhost:" + port);
	}
});
