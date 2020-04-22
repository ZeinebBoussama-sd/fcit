const db = require("../connector");
const Sequelize = require("sequelize");
const Participant = db.define("particpant", {
  id_Partcipant: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom_partcipant: Sequelize.STRING(30),
  description: Sequelize.STRING(30),
  carte_identite: Sequelize.INTEGER,
});
module.exports = Participant;
