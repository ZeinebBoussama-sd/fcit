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

  return Theme;
};
