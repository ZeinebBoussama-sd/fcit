"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Formations", {
      ref: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      intituleformation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      durée_formation: Sequelize.INTEGER,
      horaire_formation: Sequelize.INTEGER,
      nbre_min_part: Sequelize.INTEGER,
      nbre_max_part: Sequelize.INTEGER,
      description_formation: Sequelize.STRING,
      catagorie_formation: Sequelize.STRING,
      prix_formation: Sequelize.STRING,
      Participant: Sequelize.STRING,
      prerequis: Sequelize.STRING,
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
    return queryInterface.dropTable("Formations");
  },
};
