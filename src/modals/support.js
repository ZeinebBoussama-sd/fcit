const db = require("../connector");
const Sequelize = require("sequelize");
const Support = db.define("support", {
  id_support: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom_support: Sequelize.STRING(30),
  type_support: Sequelize.STRING(10),
});
module.exports = Support;
