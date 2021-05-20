const S = require("sequelize");
const db = require("../db");

class User extends S.Model {}

User.init(
	{
		name: {
			type: S.CHAR(100),
			allowNull: false,
		},
		email: {
			type: S.CHAR(100),
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
	},
	{ sequelize: db, modelName: "users" }
);

module.exports = User;
