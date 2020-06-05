"use strict";
module.exports = (sequelize, DataTypes) => {
  const Fichier = sequelize.define(
    "Fichier",
    {
      code_fichier: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nom_fichier: { type: DataTypes.STRING, allowNull: false },
      type_fichier: { type: DataTypes.STRING, allowNull: false },
      taille_max: { type: DataTypes.INTEGER, allowNull: false },
      url_fichier: { allowNull: false, type: DataTypes.STRING },
      nature_support: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  Fichier.associate = function (models) {
    Fichier.belongsTo(models.Support);
  };
  return Fichier;
};
