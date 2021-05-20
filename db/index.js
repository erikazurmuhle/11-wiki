const Sequelize = require("sequelize");
const db = new Sequelize("postgres://postgres@localhost:5432/wiki");

module.exports = db;
