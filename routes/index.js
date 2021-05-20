const express = require("express");
const router = express.Router();
const { User, Page } = require("../models");

router.get("/", (req, res, next) => {
	res.render("index", {});
});

module.exports = router;
