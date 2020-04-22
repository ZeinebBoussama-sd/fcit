const db = require("../connector");
const Sequelize = require("sequelize");
const Formateur = db.define("formateur", {
  id_formateur: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom_f: Sequelize.STRING(30),
  prenom_f: Sequelize.STRING(30),
  cv_f: Sequelize.STRING,
  email_f: Sequelize.STRING,
  tel_f: Sequelize.INTEGER,
  NSS: Sequelize.INTEGER,
  salaire: Sequelize.FLOAT,
  specialité_f: Sequelize.STRING,
  adr_f: Sequelize.STRING,
  date_dajout: Sequelize.DATE,
});
module.exports = Formateur;
