"use strict";
module.exports = (sequelize, DataTypes) => {
  const Support = sequelize.define(
    "Support",
    {
      titre_support: DataTypes.STRING,
      date_support: DataTypes.DATE,
    },
    {}
  );
  Support.associate = function (models) {
    Support.hasMany(moderls.Session);
    Support.hasMany(Fichier);
    Support.hasMany(Validation);
    // associations can be defined here
  };
  return Support;
};
