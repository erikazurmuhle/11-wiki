const express = require("express");
const router = express.Router();
const { User, Page } = require("../models");
const wikiRouter = require("./wiki");
// const userRouter = require("./user");

router.get("/", (req, res, next) => {
  Page.findAll().then((pages) => {
    res.render("index", { pages });
  });
});

router.use("/wiki", wikiRouter);
// router.use("/users", userRouter);

module.exports = router;
