"use strict";
module.exports = (sequelize, DataTypes) => {
  const Metiers = sequelize.define(
    "Metiers",
    {
      code_metier: {
        type: DataTypes.INTEGER,
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
  Metiers.associate = function (models) {
    Metiers.belongsToMany(models.Formation, { through: "donne_lieu" });
  };
  return Metiers;
};
