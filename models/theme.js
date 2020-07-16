"use strict";
module.exports = (sequelize, DataTypes) => {
  const Theme = sequelize.define(
    "Theme",
    {
      code_theme: {
        type: DataTypes.STRING(5),
        primaryKey: true,
        allowNull: false,
      },

      nom_theme: { type: DataTypes.STRING(30), allowNull: false },
    },
    {}
  );
  Theme.associate = function (models) {
    Theme.hasMany(models.Formation);
  };
  return Theme;
};
