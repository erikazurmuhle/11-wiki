const Sequelize = require("sequelize");
const db = new Sequelize("postgres://postgres@localhost:5432/wiki", {
	loggin: false,
	dialect: "postgres",
});

module.exports = db;
