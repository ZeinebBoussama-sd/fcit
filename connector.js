const Sequelize = require("sequelize");

const db = new Sequelize("fcit", null, null, {
  dialect: "sqlite",
  storage: "./fcit.sqlite",
});
module.exports = db;
