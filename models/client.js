"use strict";
module.exports = (sequelize, DataTypes) => {
  const Client = sequelize.define(
    "Client",
    {
      nom_client: DataTypes.STRING,
      email_client: DataTypes.STRING,
      tel_client: DataTypes.INTEGER,
      adr_client: DataTypes.STRING,
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
