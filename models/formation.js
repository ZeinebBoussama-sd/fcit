"use strict";
module.exports = (sequelize, DataTypes) => {
  const Formation = sequelize.define(
    "Formation",
    {
      intituleformation: { allowNull: false, type: DataTypes.STRING },
      durée_formation: DataTypes.INTEGER,
      horaire_formation: DataTypes.INTEGER,
      nbre_min_part: DataTypes.INTEGER,
      nbre_max_part: DataTypes.INTEGER,
      description_formation: DataTypes.STRING,
      catagorie_formation: DataTypes.STRING,
      prix_formation: DataTypes.STRING,
      Participant: DataTypes.STRING,
      prerequis: DataTypes.STRING,
    },
    {}
  );
  Formation.associate = function (models) {
    // associations can be defined here
  };
  return Formation;
};
