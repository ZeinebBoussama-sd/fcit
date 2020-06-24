"use strict";
module.exports = (sequelize, DataTypes) => {
  const IngenieurPedagogique = sequelize.define(
    "IngenieurPedagogique",
    {
      code_IP: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nom_ing: { allowNull: false, type: DataTypes.STRING(20) },
      prenom_ing: { allowNull: false, type: DataTypes.STRING(20) },
      cv_ing: { allowNull: false, type: DataTypes.STRING },
      email_ing: { allowNull: false, type: DataTypes.STRING, unique: true },
      tel_ing: { allowNull: false, type: DataTypes.STRING(20), unique: true },
      NSS_ing: { allowNull: false, type: DataTypes.INTEGER(10), unique: true },
      salaire_ing: { allowNull: false, type: DataTypes.FLOAT(7, 3) },
      specialite_ing: { allowNull: false, type: DataTypes.STRING(20) },
      adr_ing: { allowNull: false, type: DataTypes.STRING },
    },
    {}
  );
  IngenieurPedagogique.associate = function (models) {
    IngenieurPedagogique.hasMany(models.Validation);
  };
  return IngenieurPedagogique;
};
