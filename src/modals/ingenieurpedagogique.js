const db = require("../connector");
const Sequelize = require("sequelize");
const IngenieurPedagogique = db.define("ingenieurpedagogique", {
  id_ID: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom_ing: Sequelize.STRING(30),
  prenom_ing: Sequelize.STRING(30),
  cv_ing: Sequelize.STRING,
  email_ing: Sequelize.STRING,
  tel_ing: Sequelize.INTEGER,
  NSS_ing: Sequelize.INTEGER,
  salaire_ing: Sequelize.FLOAT,
  specialité_ing: Sequelize.STRING,
  adr_ing: Sequelize.STRING,
});
module.exports = IngenieurPedagogique;
