"use strict";
module.exports = (sequelize, DataTypes) => {
  const Support = sequelize.define("Support", {
    code_support: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    titre_support: { type: DataTypes.STRING, allowNull: false },
    date_support: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  Support.associate = function (models) {
    Support.hasMany(models.Session);
    Support.hasMany(models.Fichier);
    Support.hasMany(models.Validation);
  };
  return Support;
};
