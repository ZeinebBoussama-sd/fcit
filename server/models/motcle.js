"use strict";
module.exports = (sequelize, DataTypes) => {
  const MotCle = sequelize.define(
    "MotCle",
    {
      motcle: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
      },
    },
    {}
  );

  return MotCle;
};
