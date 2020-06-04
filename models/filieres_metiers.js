"use strict";
module.exports = (sequelize, DataTypes) => {
  const Filieres_metiers = sequelize.define(
    "Filieres_metiers",
    {
      code_intitule_filiere: {
        type: DataTypes.STRING(5),
        primaryKey: true,
      },
      intitule_filiere: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
    },
    {}
  );

  return Filieres_metiers;
};
