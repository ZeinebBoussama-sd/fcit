"use strict";
module.exports = (sequelize, DataTypes) => {
  const Formateur_Formation = sequelize.define(
    "Formateur_Formation",
    {
      validation_f: { type: DataTypes.BOOLEAN, allowNull: false },
      date_validation: { type: DataTypes.DATE },
    },
    {}
  );

  return Formateur_Formation;
};
