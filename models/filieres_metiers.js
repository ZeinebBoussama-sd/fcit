"use strict";
module.exports = (sequelize, DataTypes) => {
  const Filieres_metiers = sequelize.define(
    "Filieres_metiers",
    {
      intitule_filiere: DataTypes.STRING,
    },
    {}
  );

  return Filieres_metiers;
};
