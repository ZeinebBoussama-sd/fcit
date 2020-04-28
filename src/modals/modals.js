const db = require("../connector");
const Sequelize = require("sequelize");

Formation.belongsTo(Theme);
Theme.hasMany(Formation);

DemandeFormation.belongsTo(Formation);
Formation.hasMany(DemandeFormation);

Session.belongsTo(Formation);
Formation.hasMany(Session);

Formation.belongsToMany(Formateur, { through: "Formateur_Formation" });
Formation.belongsToMany(MotCle, { through: "C" });
Formation.belongsToMany(Filieres_metiers, { through: "D" });

Validation.belongsTo(Formateur);
Formateur.hasMany(Validation);

IngenieurPedagogique.hasMany(Validation);
Validation.belongsTo(IngenieurPedagogique);

Session.belongsTo(Formateur);
Formateur.hasMany(Session);

Validation.belongsTo(Support);
Support.hasMany(Validation);

Support.hasMany(Fichier);
Fichier.belongsTo(Support);
Support.hasMany(Session);
Session.belongsTo(Support);

Participant.belongsToMany(Session, { through: "Participer" });
