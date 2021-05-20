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
			type: S.CHAR(100),
			allowNull: false,
		},
		content: {
			type: S.TEXT,
			allowNull: false,
		},
		status: {
			type: S.ENUM("open", "closed"),
		},
	},
	{ sequelize: db, modelName: "pages" }
);

module.exports = Page;
