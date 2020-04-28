"use strict";
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define(
    "Session",
    {
      type_sess: DataTypes.STRING,
      mode_session: DataTypes.STRING,
      date_deb_sess: DataTypes.DATE,
      durée_sess: DataTypes.INTEGER,
      horaire_sess: DataTypes.STRING,
      lieu_sess: DataTypes.STRING,
      prix_session: DataTypes.DOUBLE,
      honoraire_sess: DataTypes.DECIMAL,
      frais_sejour: DataTypes.FLOAT,
      frais_transport: DataTypes.FLOAT,
      perdiem: DataTypes.FLOAT,
      autres_frais: DataTypes.FLOAT,
      note_eval_formateur: DataTypes.INTEGER,
    },
    {}
  );
  Session.associate = function (models) {
    Session.belongsTo(models.Formation);
    Session.belongsTo(models.Formateur);
    Session.belongsTo(models.Support);
    // associations can be defined here
  };
  return Session;
};
