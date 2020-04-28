"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Sessions", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      type_sess: Sequelize.STRING,
      mode_session: Sequelize.STRING,
      date_deb_sess: Sequelize.DATE,
      durée_sess: Sequelize.INTEGER,
      horaire_sess: Sequelize.STRING,
      lieu_sess: Sequelize.STRING,
      prix_session: Sequelize.DOUBLE,
      honoraire_sess: Sequelize.DECIMAL,
      frais_sejour: Sequelize.FLOAT,
      frais_transport: Sequelize.FLOAT,
      perdiem: Sequelize.FLOAT,
      autres_frais: Sequelize.FLOAT,
      note_eval_formateur: Sequelize.INTEGER,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Sessions");
  },
};
