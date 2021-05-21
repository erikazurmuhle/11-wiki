const express = require("express");
const router = express.Router();
const urlGen = require("../utils/urlGenerator");

const Page = require("../models/Pages");

router.get("/", (req, res, next) => {
  res.redirect("/");
});
router.post("/", (req, res, next) => {
  const title = req.body.title;
  const content = req.body.content;
  const status = req.body.status;
  var page = Page.create({ title, content, status })
    .then((page) => res.redirect(page.route))
    .catch((err) => {
      next(err);
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
