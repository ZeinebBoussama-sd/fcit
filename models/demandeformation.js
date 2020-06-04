"use strict";
module.exports = (sequelize, DataTypes) => {
  const DemandeFormation = sequelize.define(
    "DemandeFormation",
    {
      code_demande: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date_demande: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      type_demande: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      etat_demande: { type: DataTypes.STRING(10), allowNull: false },
      prix_prevu: { type: DataTypes.FLOAT(7, 3), allowNull: false },
      lieu_prevu: DataTypes.STRING,
      duree_prevu: DataTypes.INTEGER,
      horaire_prevu: DataTypes.STRING,
      mode_demande: DataTypes.STRING,
    },
    {}
  );
  DemandeFormation.associate = function (models) {
    DemandeFormation.belongsTo(models.Formation);
    DemandeFormation.belongsTo(models.Client);
  };
  return DemandeFormation;
};
