const db = require("../connector");
const Sequelize = require("sequelize");
const Fichier = db.define("fichier", {
  id_fichier: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom_fichier: Sequelize.STRING(20),
  type_fichier: Sequelize.STRING(20),
  taille_max: Sequelize.INTEGER,
  url_fichier: Sequelize.STRING,
});
module.exports = Fichier;
