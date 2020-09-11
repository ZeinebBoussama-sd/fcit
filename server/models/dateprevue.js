"use strict";
module.exports = (sequelize, DataTypes) => {
  const DatePrevue = sequelize.define(
    "DatePrevue",
    {
      date_prev: {
        type: DataTypes.DATE,
        primaryKey: true,
        allowNull: false,
      },
    },
    {}
  );
  DatePrevue.associate = function (models) {
    DatePrevue.belongsToMany(models.DemandeFormation, { through: "prevue" });
  };
  return DatePrevue;
};
