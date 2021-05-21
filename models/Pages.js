const S = require("sequelize");
const db = require("../db");
const urlTitleGen = require("../utils/urlGenerator");

class Page extends S.Model {}

Page.init(
  {
    title: {
      type: S.STRING,
      allowNull: false,
    },
    urlTitle: {
      type: S.STRING,
      allowNull: false,
    },
    content: {
      type: S.TEXT,
      allowNull: false,
    },
    status: {
      type: S.ENUM("open", "closed"),
      defaultValue: "open",
    },
    date: {
      type: S.DATE,
      defaultValue: S.NOW,
    },
    route: {
      type: S.VIRTUAL,
      get() {
        return `${this.urlTitle}`;
      },
    },
  },
  { sequelize: db, modelName: "pages" }
);
Page.addHook("beforeValidate", (page, options) => {
  page.urlTitle = urlTitleGen(page.title);
});

module.exports = Page;
