"use strict";
module.exports = (sequelize, DataTypes) => {
  const Formateur_Formation = sequelize.define(
    "Formateur_Formation",
    {
      validation_f: DataTypes.BOOLEAN,
      date_validation: DataTypes.DATE,
    },
    {}
  );

  return Formateur_Formation;
};
