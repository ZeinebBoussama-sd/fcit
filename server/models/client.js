"use strict";
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    "Client",
    {
      code_client: {
        type: DataTypes.STRING(5),
        primaryKey: true,
        allowNull: false,
      },
      pays_client: {
        type: DataTypes.STRING(5),
        allowNull: false,
      },
      nom_client: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      email_client: { type: DataTypes.STRING, allowNull: false },
      tel_client: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      adr_client: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
      },
    },
    {}
  );
  Client.associate = function (models) {
    Client.hasOne(models.Societe);
    Client.hasOne(models.Personne);
    Client.hasMany(models.Session);
    Client.hasMany(models.DemandeFormation);
    Client.hasMany(models.Participant);
  };
  return Client;
};
