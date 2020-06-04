"use strict";
module.exports = (sequelize, DataTypes) => {
  const Personne = sequelize.define("Personne", {
    cin_p: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  Personne.associate = function (models) {
    Personne.belongsTo(models.Client);
  };
  return Personne;
};
