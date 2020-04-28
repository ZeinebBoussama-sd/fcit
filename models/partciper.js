"use strict";
module.exports = (sequelize, DataTypes) => {
  const Partciper = sequelize.define(
    "Partciper",
    {
      rapport_eval: DataTypes.STRING,
      note_QCM: DataTypes.FLOAT,
      date_eval: DataTypes.DATE,
    },
    {}
  );
  Partciper.associate = function (models) {
    // associations can be defined here
  };
  return Partciper;
};
