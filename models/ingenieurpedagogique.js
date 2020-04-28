"use strict";
module.exports = (sequelize, DataTypes) => {
  const IngenieurPedagogique = sequelize.define(
    "IngenieurPedagogique",
    {
      nom_ing: { allowNull: false, type: DataTypes.STRING },
      prenom_ing: { allowNull: false, type: DataTypes.STRING },
      cv_ing: DataTypes.STRING,
      email_ing: DataTypes.STRING,
      tel_ing: DataTypes.INTEGER,
      NSS_ing: DataTypes.INTEGER,
      salaire_ing: DataTypes.FLOAT,
      specialité_ing: DataTypes.STRING,
      adr_ing: DataTypes.STRING,
    },
    {}
  );
  IngenieurPedagogique.associate = function (models) {
    IngenieurPedagogique.hasMany(models.Validation);
    // associations can be defined here
  };
  return IngenieurPedagogique;
};
