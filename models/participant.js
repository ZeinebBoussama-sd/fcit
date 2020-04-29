"use strict";
module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define(
    "Participant",
    {
      nom_partcipant: DataTypes.STRING,
      prenom_partcipant: DataTypes.STRING,
      carte_identite: { allowNull: false, type: DataTypes.INTEGER },
    },
    {}
  );
  Participant.associate = function (models) {
    Participant.belongsToMany(models.Session, { through: "Participer" });

    // associations can be defined here
  };
  return Participant;
};
