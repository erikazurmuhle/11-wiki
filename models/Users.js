const S = require("sequelize");
const db = require("../db");

class User extends S.Model {}

User.init(
  {
    name: {
      type: S.DataTypes.CHAR(100),
      allowNull: false,
    },
    email: {
      type: S.DataTypes.CHAR(100),
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "pages" }
);

module.exports = User;
