const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("evaluation", "root", "Password@123", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = { sequelize };
