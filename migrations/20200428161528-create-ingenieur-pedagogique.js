"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("IngenieurPedagogiques", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom_ing: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      prenom_ing: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      cv_ing: Sequelize.STRING,
      email_ing: Sequelize.STRING,
      tel_ing: Sequelize.INTEGER,
      NSS_ing: Sequelize.INTEGER,
      salaire_ing: Sequelize.FLOAT,
      specialité_ing: Sequelize.STRING,
      adr_ing: Sequelize.STRING,
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
    return queryInterface.dropTable("IngenieurPedagogiques");
  },
};
