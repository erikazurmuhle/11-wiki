const express = require("express");
const router = express.Router();
const urlGen = require("../utils/urlGenerator");

const { User, Page } = require("../models");

router.get("/", (req, res, next) => {
	res.redirect("/");
});
router.post("/", (req, res, next) => {
	const name = req.body.name;
	const email = req.body.email;
	User.findOrCreate({ where: { name, email } }).then((user) => {
		// console.log(`Este es el usuariooo: ${user[0]}`);
		// console.log(Object.keys(user[0].__proto__));
		Page.create(req.body)
			.then((page) => {
				// console.log(Object.keys(page.__proto__));
				page.setAuthor(user[0]);
				res.redirect(page.route);
			})
			.catch((err) => {
				next(err);
			});
	});
});

router.get("/add", (req, res, next) => {
	res.render("addpage");
});
router.get("/:urlTitle", (req, res, next) => {
	Page.findOne({ where: { urlTitle: `/wiki/${req.params.urlTitle}` } })
		.then((page) => {
			res.render("wikipage", { page });
		})
		.catch(next);
});

module.exports = router;
