"use strict";
module.exports = (sequelize, DataTypes) => {
  const Personne = sequelize.define("Personne", {
    cin_p: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
  });
  Personne.associate = function (models) {
    Personne.hasOne(models.Client);
  };
  return Personne;
};
