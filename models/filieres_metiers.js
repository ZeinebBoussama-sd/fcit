"use strict";
module.exports = (sequelize, DataTypes) => {
  const Filieres_metiers = sequelize.define(
    "Filieres_metiers",
    {
      intitulé_filiere: DataTypes.STRING,
    },
    {}
  );
  Filieres_metiers.associate = function (models) {
    // associations can be defined here
  };
  return Filieres_metiers;
};
