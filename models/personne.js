"use strict";
module.exports = (sequelize, DataTypes) => {
  const Personne = sequelize.define("Personne", {
    cin_p: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      unique: true,
    },
  });
  Personne.associate = function (models) {
    Personne.belongsTo(models.Client);
  };
  return Personne;
};
