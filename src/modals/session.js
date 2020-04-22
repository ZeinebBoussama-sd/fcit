const db = require("../connector");
const Sequelize = require("sequelize");
const Session = db.define("session", {
  id_session: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type_sess: Sequelize.STRING,
  date_deb_sess: Sequelize.DATE,
  durée_sess: Sequelize.INTEGER,
  horaire_sess: Sequelize.STRING,
  lieu_sess: Sequelize.STRING,
  honoraire_sess: Sequelize.DECIMAL,
  frais_sejour: Sequelize.FLOAT,
  frais_transport: Sequelize.FLOAT,
  frais_autres: Sequelize.FLOAT,
});
module.exports = Session;
