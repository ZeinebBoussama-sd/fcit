'use strict';
module.exports = (sequelize, DataTypes) => {
  const Formation = sequelize.define(
    'Formation',
    {
      intitule: { allowNull: false, type: DataTypes.STRING },
      duree_formation: DataTypes.INTEGER,
      horaire_formation: DataTypes.INTEGER,
      nbre_min_part: DataTypes.INTEGER,
      nbre_max_part: DataTypes.INTEGER,
      description_formation: DataTypes.STRING,
      catagorie_formation: DataTypes.STRING,
      prix_formation: DataTypes.STRING,
      participant: DataTypes.STRING,
      prerequis: DataTypes.STRING,
    },
    {}
  );
  Formation.associate = function (models) {
    Formation.hasMany(models.DemandeFormation);
    Formation.belongsTo(models.Theme);
    Formation.hasMany(models.Session);
    Formation.belongsToMany(models.Formateur, {
      through: 'Formateur_Formation',
    });
    Formation.belongsToMany(models.MotCle, { through: 'FormationMotCle' });
    Formation.belongsToMany(models.Filieres_metiers, { through: 'D' });
  };
  return Formation;
};
