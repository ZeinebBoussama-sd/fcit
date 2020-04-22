const db = require("../connector");
const Sequelize = require("sequelize");
const Formation = db.define("formation", {
  ref_formation: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  intituleformation: Sequelize.STRING,
  durée_formation: Sequelize.INTEGER,
  horaire_formation: Sequelize.INTEGER,
  nbre_min_part: Sequelize.INTEGER,
  nbre_max_part: Sequelize.INTEGER,
});
module.exports = Formation;
