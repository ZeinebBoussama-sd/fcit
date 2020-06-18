"use strict";
module.exports = (sequelize, DataTypes) => {
  const Formateur = sequelize.define(
    "Formateur",
    {
      code_formateur: {
        type: DataTypes.STRING(5),
        primaryKey: true,
        allowNull: false,
      },
      nom_f: { allowNull: false, type: DataTypes.STRING(30) },
      prenom_f: { allowNull: false, type: DataTypes.STRING(30) },
      classe_f: { type: DataTypes.STRING(10) },
      fonction_f: { allowNull: false, type: DataTypes.STRING(20) },
      cv_f: { type: DataTypes.STRING, allowNull: false },
      email_f: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      tel_f: { allowNull: false, type: DataTypes.STRING(20) },
      NSS: { type: DataTypes.INTEGER(10) },
      salaire_f: DataTypes.FLOAT(7, 3),
      adr_f: { allowNull: false, type: DataTypes.STRING },
      date_dajout: DataTypes.DATE,
      cin_f: { type: DataTypes.INTEGER(8) },
      copie_cin: DataTypes.STRING,
      passeport_f: { type: DataTypes.STRING(10) },
      copie_passeport: DataTypes.STRING,
      visa_f: { type: DataTypes.STRING(10) },
      val_visa: DataTypes.DATE,
      tarif_f: DataTypes.FLOAT(7, 3),
      RIB_f: { type: DataTypes.STRING(20) },
      copie_RIB: DataTypes.STRING,
    },
    {}
  );
  Formateur.associate = function (models) {
    Formateur.hasMany(models.Session);
    Formateur.hasMany(models.Validation);
  };
  return Formateur;
};
