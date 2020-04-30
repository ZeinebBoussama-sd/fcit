"use strict";
module.exports = (sequelize, DataTypes) => {
  const Theme = sequelize.define(
    "Theme",
    {
      nom_theme: DataTypes.STRING,
    },
    {}
  );

  return Theme;
};
