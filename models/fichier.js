"use strict";
module.exports = (sequelize, DataTypes) => {
  const Fichier = sequelize.define(
    "Fichier",
    {
      nom_fichier: DataTypes.STRING,
      type_fichier: DataTypes.STRING,
      taille_max: DataTypes.INTEGER,
      url_fichier: { allowNull: false, type: DataTypes.STRING },
      nature_support: DataTypes.STRING,
    },
    {}
  );
  Fichier.associate = function (models) {
    Fichier.belongsTo(models.Support);
  };
  return Fichier;
};
