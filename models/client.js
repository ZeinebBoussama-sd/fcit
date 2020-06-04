"use strict";
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    "Client",
    {
      code_client: {
        type: DataTypes.STRING(5),
        primaryKey: true,
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
      tel_client: { type: DataTypes.STRING(20), allowNull: false },
      adr_client: { type: DataTypes.STRING(30), allowNull: false },
    },
    {}
  );
  Client.associate = function (models) {
    Client.belongsTo(models.Societe);
    Client.belongsTo(models.Personne);
    Client.hasMany(models.Session);
    Client.hasMany(models.DemandeFormation);
  };
  return Client;
};
