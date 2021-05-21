const User = require("./Users");
const Page = require("./Pages");

Page.belongsTo(User, { as: "author" });
console.log("hola");
module.exports = {
  User,
  Page,
};
