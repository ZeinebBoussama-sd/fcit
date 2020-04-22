const db = require("../connector");
const Sequelize = require("sequelize");
const DemandeFormation = db.define("demandeformation", {
  id_sdemandeformation: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date_demande: Sequelize.DATE,
  date_deb_prevue: Sequelize.DATE,
  type_demande: Sequelize.STRING(15),
  etat_demande: Sequelize.STRING(10),
  horaire_prevu: Sequelize.FLOAT,
  lieu_prevu: Sequelize.STRING(15),
  durée_prévu: Sequelize.INTEGER,
  horaire_prevu: Sequelize.STRING(5),
});
module.exports = DemandeFormation;
