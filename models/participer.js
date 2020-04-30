"use strict";
module.exports = (sequelize, DataTypes) => {
  const Participer = sequelize.define("Participer", {
    rapport_eval: DataTypes.STRING,
    note_QCM: DataTypes.FLOAT,
    date_eval: DataTypes.DATE,
  });

  return Participer;
};
