const S = require("sequelize");
const db = require("../db");

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
				return `/wiki/${this.urlTitle}`;
			},
		},
	},
	{ sequelize: db, modelName: "pages" }
);

module.exports = Page;
