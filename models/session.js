"use strict";
module.exports = (sequelize, DataTypes) => {
  const Session = sequelize.define(
    "Session",
    {
      CI_session: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      code_session: {
        type: DataTypes.STRING(5),
        allowNull: false,
        unique: true,
      },
      type_sess: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      mode_session: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      date_deb_sess: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      duree_sess: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      hr_deb_j: { type: DataTypes.STRING(5), allowNull: false },
      hr_fin_j: { type: DataTypes.STRING(5), allowNull: false },
      hr_j_session: { type: DataTypes.INTEGER(2), allowNull: false },
      lieu_sess: { type: DataTypes.STRING(30), allowNull: false },
      prix_session: { type: DataTypes.FLOAT(7, 3), allowNull: false },
      honoraire_sess: { type: DataTypes.FLOAT(7, 3) },
      frais_sejour: { type: DataTypes.FLOAT(7, 3) },
      frais_transport: { type: DataTypes.FLOAT(7, 3) },
      perdiem: { type: DataTypes.FLOAT(7, 3) },
      autres_frais: { type: DataTypes.FLOAT(7, 3) },
      note_eval_formateur: { type: DataTypes.FLOAT },
    },
    {}
  );
  Session.associate = function (models) {
    Session.belongsTo(models.Formation);
    Session.belongsTo(models.Formateur);
    Session.belongsTo(models.Support);
    Session.belongsTo(models.Client);
  };
  return Session;
};
