"use strict";
module.exports = (sequelize, DataTypes) => {
  const DemandeFormation = sequelize.define(
    "DemandeFormation",
    {
      code_demande: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
      lieu_prevu: { type: DataTypes.STRING(20), allowNull: false },
      duree_prevu: { type: DataTypes.INTEGER, allowNull: false },
      mode_demande: { type: DataTypes.STRING(10), allowNull: false },
      hr_deb_j_prev: { type: DataTypes.STRING(5), allowNull: false },
      hr_fin_j_prev: { type: DataTypes.STRING(5), allowNull: false },
      hr_j_prev: { type: DataTypes.INTEGER(2), allowNull: false },
    },
    {}
  );
  DemandeFormation.associate = function (models) {
    DemandeFormation.belongsTo(models.Formation);
    DemandeFormation.belongsTo(models.Client);
    DemandeFormation.belongsTo(models.Demandeur);
    DemandeFormation.belongsToMany(models.DatePrevue, { through: "prevue" });
  };
  return DemandeFormation;
};
