"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Fichiers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom_fichier: Sequelize.STRING,
      type_fichier: Sequelize.STRING,
      taille_max: Sequelize.INTEGER,
      url_fichier: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nature_support: Sequelize.STRING,
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
    return queryInterface.dropTable("Fichiers");
  },
};
