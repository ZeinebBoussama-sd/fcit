"use strict";
module.exports = (sequelize, DataTypes) => {
  const Participer = sequelize.define("Participer", {
    rapport_eval: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note_QCM: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    date_eval: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });

  return Participer;
};
