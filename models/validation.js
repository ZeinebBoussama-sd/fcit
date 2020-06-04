"use strict";
module.exports = (sequelize, DataTypes) => {
  const Validation = sequelize.define(
    "Validation",
    {
      code_val: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date_val: { type: DataTypes.DATE, allowNull: false },
      remarque: { type: DataTypes.STRING, allowNull: false },
      decision_r: { type: DataTypes.BOOLEAN, allowNull: false },
      decision_f: { type: DataTypes.BOOLEAN, allowNull: false },
    },
    {}
  );

  return Validation;
};
