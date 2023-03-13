const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("rdsTest", "admin", "abcd1234", {
  host: "database-1.cjrbkjkvr8eq.eu-north-1.rds.amazonaws.com",
  dialect: "mysql",
});

module.exports = { sequelize };
