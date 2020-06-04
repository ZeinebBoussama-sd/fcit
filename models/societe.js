"use strict";
module.exports = (sequelize, DataTypes) => {
  const Societe = sequelize.define("Societe", {
    mat_fisc_sc: {
      type: DataTypes.STRING(15),
      primaryKey: true,
    },
    responsable: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  });
  Societe.associate = function (models) {
    Societe.hasOne(models.Client);
  };
  return Societe;
};
