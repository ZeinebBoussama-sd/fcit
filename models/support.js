"use strict";
module.exports = (sequelize, DataTypes) => {
  const Support = sequelize.define("Support", {
    titre_support: DataTypes.STRING,
    date_support: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  });
  Support.associate = function (models) {
    Support.hasMany(models.Session);
    Support.hasMany(models.Fichier);
    Support.hasMany(models.Validation);
    // associations can be defined here
  };
  return Support;
};
