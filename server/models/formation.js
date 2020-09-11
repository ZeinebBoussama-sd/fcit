"use strict";
module.exports = (sequelize, DataTypes) => {
  const Formation = sequelize.define(
    "Formation",
    {
      CI_formation: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      code_formation: {
        type: DataTypes.STRING(5),
        allowNull: false,
        unique: true,
      },
      intitule: { allowNull: false, type: DataTypes.STRING(30) },
      duree_formation: { type: DataTypes.INTEGER, allowNull: false },
      nbre_min_part: { type: DataTypes.INTEGER, allowNull: false },
      description_formation: { type: DataTypes.STRING, allowNull: false },
      catagorie_formation: { type: DataTypes.STRING(10), allowNull: false },
      prix_formation: { type: DataTypes.FLOAT(7, 3), allowNull: false },
      participant: { type: DataTypes.STRING, allowNull: false },
      prerequis: { type: DataTypes.STRING, allowNull: false },
    },
    {}
  );
  Formation.associate = function (models) {
    Formation.hasMany(models.DemandeFormation);
    Formation.belongsTo(models.Theme);
    Formation.hasMany(models.Session);
    Formation.belongsToMany(models.Formateur, {
      through: "Formateur_Formation",
    });
    Formation.belongsToMany(models.MotCle, { through: "FormationMotCle" });
    Formation.belongsToMany(models.Metiers, { through: "donne_lieu" });
  };
  return Formation;
};
