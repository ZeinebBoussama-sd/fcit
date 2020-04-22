const db = require("../connector");
const Sequelize = require("sequelize");
const Theme = db.define("theme", {
  id_theme: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom_theme: Sequelize.STRING,
});
module.exports = Theme;
