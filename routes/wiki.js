const express = require("express");
const router = express.Router();

const Page = require("../models/Pages");

router.get("/", (req, res, next) => {
	res.redirect("/");
});

router.post("/", (req, res, next) => {
	const title = req.body.title;
	const content = req.body.content;
	const status = req.body.status;
	console.log(`Este es el STATUS ${status}`);
	let urlTitle = "/la-casas-de-papel";
	var page = Page.create({ title, urlTitle, content, status })
		.then(() => res.redirect("/"))
		.catch((err) => {
			next(err);
		});
});

router.get("/add", (req, res, next) => {
	res.render("addpage");
});

module.exports = router;
