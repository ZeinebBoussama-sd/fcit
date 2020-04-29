"use strict";
module.exports = (sequelize, DataTypes) => {
  const DemandeFormation = sequelize.define(
    "DemandeFormation",
    {
      date_demande: DataTypes.DATE,
      date_deb_prevue: DataTypes.DATE,
      type_demande: DataTypes.STRING,
      etat_demande: DataTypes.STRING,
      prix_prevu: DataTypes.FLOAT,
      lieu_prevu: DataTypes.STRING,
      durée_prévu: DataTypes.INTEGER,
      horaire_prevu: DataTypes.STRING,
      mode_demande: DataTypes.STRING,
    },
    {}
  );
  DemandeFormation.associate = function (models) {
    DemandeFormation.belongsTo(models.Formation);

    // associations can be defined here
  };
  return DemandeFormation;
};
