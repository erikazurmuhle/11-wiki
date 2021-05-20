const S = require("sequelize");
const db = require("../db");

class Page extends S.Model {}

Page.init(
  {
    title: {
      type: S.DataTypes.CHAR(100),
      allowNull: false,
    },
    urlTitle: {
      type: S.DataTypes.CHAR(100),
      allowNull: false,
    },
    content: {
      type: S.DataTypes.TEXT,
      allowNull: false,
    },
    status: {
      type: S.DataTypes.ENUM("open", "closed"),
      defaultValue: true,
    },
  },
  { sequelize: db, modelName: "pages" }
);

module.exports = Page;
