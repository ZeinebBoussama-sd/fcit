"use strict";
module.exports = (sequelize, DataTypes) => {
  const Validation = sequelize.define(
    "Validation",
    {
      date_val: DataTypes.DATE,
      decision: DataTypes.STRING,
      remarque: DataTypes.STRING,
    },
    {}
  );
  Validation.associate = function (models) {
    // associations can be defined here
  };
  return Validation;
};
