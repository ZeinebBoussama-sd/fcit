"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Partcipers", {
      rapport_eval: {
        type: Sequelize.STRING,
      },
      note_QCM: {
        type: Sequelize.FLOAT,
      },
      date_eval: {
        type: Sequelize.DATE,
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
    return queryInterface.dropTable("Partcipers");
  },
};
