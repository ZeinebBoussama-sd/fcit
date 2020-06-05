"use strict";
module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define(
    "Participant",
    {
      code_participant: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nom_partcipant: { type: DataTypes.STRING(30), allowNull: false },
      prenom_partcipant: { type: DataTypes.STRING(30), allowNull: false },
      carte_identite: { allowNull: false, type: DataTypes.INTEGER(10) },
    },
    {}
  );
  Participant.associate = function (models) {
    Participant.belongsToMany(models.Session, { through: "Participer" });
    Participant.belongsTo(models.Client);
  };
  return Participant;
};
