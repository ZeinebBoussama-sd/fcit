"use strict";
module.exports = (sequelize, DataTypes) => {
  const Metiers = sequelize.define(
    "Metiers",
    {
      code_metier: {
        type: DataTypes.STRING(5),
        primaryKey: true,
        allowNull: false,
      },
      intitule_metier: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {}
  );

  return Metiers;
};
