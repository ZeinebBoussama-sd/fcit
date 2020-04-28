"use strict";
module.exports = (sequelize, DataTypes) => {
  const Formateur_Formartion = sequelize.define(
    "Formateur_Formartion",
    {
      validation_f: DataTypes.BOOLEAN,
      date_validation: DataTypes.DATE,
    },
    {}
  );
  Formateur_Formartion.associate = function (models) {
    // associations can be defined here
  };
  return Formateur_Formartion;
};
