"use strict";
module.exports = (sequelize, DataTypes) => {
  const Formateur = sequelize.define(
    "Formateur",
    {
      nom_f: { allowNull: false, type: DataTypes.STRING },
      prenom_f: { allowNull: false, type: DataTypes.STRING },
      classe_f: DataTypes.STRING,
      fonction_f: DataTypes.STRING,
      cv_f: DataTypes.STRING,
      email_f: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tel_f: DataTypes.INTEGER,
      NSS: DataTypes.INTEGER,
      salaire_f: DataTypes.FLOAT,
      specialite_f: DataTypes.STRING,
      adr_f: DataTypes.STRING,
      date_dajout: DataTypes.DATE,
    },
    {}
  );
  Formateur.associate = function (models) {
    Formateur.hasMany(models.Session);
    Formateur.hasMany(models.Validation);
  };
  return Formateur;
};
