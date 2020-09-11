"use strict";
module.exports = (sequelize, DataTypes) => {
  const Demandeur = sequelize.define(
    "Demandeur",
    {
      code_demandeur: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      nom_demandeur: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      prenom_demandeur: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      email_demandeur: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      tel_demandeur: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
    },
    {}
  );
  Demandeur.associate = function (models) {
    Demandeur.hasMany(models.DemandeFormation);
  };

  return Demandeur;
};
