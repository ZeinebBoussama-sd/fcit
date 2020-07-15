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
  MotCle.associate = function (models) {
    MotCle.belongsToMany(models.Formation, { through: "FormationMotCle" });
  };
  return MotCle;
};
