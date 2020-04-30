"use strict";
module.exports = (sequelize, DataTypes) => {
  const Societe = sequelize.define("Societe", {
    mat_fisc_sc: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Societe.associate = function (models) {
    Societe.hasOne(models.Client);
  };
  return Societe;
};
