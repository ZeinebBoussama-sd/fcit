"use strict";
module.exports = (sequelize, DataTypes) => {
  const Theme = sequelize.define(
    "Theme",
    {
      nom_theme: DataTypes.STRING,
    },
    {}
  );
  Theme.associate = function (models) {
    // associations can be defined here
  };
  return Theme;
};
