/*
Script here generates mock data for local development.
Provides randomized data.
*/

/* eslint-disable no-console*/

// eslint-disable-next-line import/named
// import { generate, extend } from "json-schema-faker";
// import { schema } from "./mockDataSchema";
// import fs from "fs";
// import chalk from "chalk";

// // Extend JSF with the fake libs one wants to use.
// extend("faker", () => require("faker"));
// const json = JSON.stringify(generate(schema));

// fs.writeFile("./src/api/db.json", json, function (err) {
// 	if (err) {
// 		return console.log(chalk.red(err));
// 	} else {
// 		console.log(chalk.green("Mock data generated"));
// 	}
// });

const { resolve, extend } = require('json-schema-faker');

// import { generate, extend } from "json-schema-faker";
import { schema } from "./mockDataSchema";
import fs from "fs";
import chalk from "chalk";

// Extend JSF with the fake libs one wants to use.
extend("faker", () => require("faker"));

resolve(schema).then(sample => {
	fs.writeFile("./src/api/db.json", JSON.stringify(sample), function (err) {
		if (err) {
			return console.log(chalk.red(err));
		} else {
			console.log(chalk.green("Mock data generated"));
		}
	});
});

// const json = JSON.stringify(resolve(schema));

// fs.writeFile("./src/api/db.json", json, function (err) {
// 	if (err) {
// 		return console.log(chalk.red(err));
// 	} else {
// 		console.log(chalk.green("Mock data generated"));
// 	}
// });
