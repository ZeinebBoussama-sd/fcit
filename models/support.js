"use strict";
module.exports = (sequelize, DataTypes) => {
  const Support = sequelize.define("Support", {
    titre_support: DataTypes.STRING,
    date_support: {
      type: DataTypes.DATE,
    },
  });
  Support.associate = function (models) {
    Support.hasMany(models.Session);
    Support.hasMany(models.Fichier);
    Support.hasMany(models.Validation);
  };
  return Support;
};
