"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("DemandeFormations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      date_demande: {
        type: Sequelize.DATE,
      },
      date_deb_prevue: {
        type: Sequelize.DATE,
      },
      type_demande: {
        type: Sequelize.STRING,
      },
      etat_demande: {
        type: Sequelize.STRING,
      },
      prix_prevu: {
        type: Sequelize.FLOAT,
      },
      lieu_prevu: {
        type: Sequelize.STRING,
      },
      durée_prévu: {
        type: Sequelize.INTEGER,
      },
      horaire_prevu: {
        type: Sequelize.STRING,
      },
      mode_demande: {
        type: Sequelize.STRING,
      },
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
    return queryInterface.dropTable("DemandeFormations");
  },
};
