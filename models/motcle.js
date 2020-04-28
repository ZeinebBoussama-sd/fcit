"use strict";
module.exports = (sequelize, DataTypes) => {
  const MotCle = sequelize.define("MotCle", {}, {});
  MotCle.associate = function (models) {
    // associations can be defined here
  };
  return MotCle;
};
