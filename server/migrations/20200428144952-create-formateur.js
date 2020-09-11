"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Formateurs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nom_f: { allowNull: false, type: Sequelize.STRING },
      prenom_f: { allowNull: false, type: Sequelize.STRING },

      classe_f: Sequelize.STRING,
      fonction_f: Sequelize.STRING,
      cv_f: Sequelize.STRING,
      email_f: { allowNull: false, type: Sequelize.STRING },
      tel_f: Sequelize.INTEGER,
      NSS: Sequelize.INTEGER,
      salaire_f: Sequelize.FLOAT,
      specialité_f: Sequelize.STRING,
      adr_f: Sequelize.STRING,
      date_dajout: Sequelize.DATE,

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
    return queryInterface.dropTable("Formateurs");
  },
};
