"use strict";
module.exports = (sequelize, DataTypes) => {
  const Societe = sequelize.define("Societe", {
    mat_fisc_sc: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    responsable: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
  });
  Societe.associate = function (models) {
    Societe.belongsTo(models.Client);
  };
  return Societe;
};
