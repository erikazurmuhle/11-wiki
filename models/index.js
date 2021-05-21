const User = require("./Users");
const Page = require("./Pages");

Page.belongsTo(User, { as: "author" });

module.exports = {
	User,
	Page,
};
