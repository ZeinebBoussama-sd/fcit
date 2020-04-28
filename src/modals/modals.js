const db = require("../connector");
const Sequelize = require("sequelize");
const Fichier = db.define("fichier", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom_fichier: Sequelize.STRING(20),
  type_fichier: Sequelize.STRING(20),
  taille_max: Sequelize.INTEGER,
  url_fichier: Sequelize.STRING,
  nature_support: Sequelize.STRING,
});
module.exports = Fichier;
const DemandeFormation = db.define("demandeformation", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date_demande: Sequelize.DATE,
  date_deb_prevue: Sequelize.DATE,
  type_demande: Sequelize.STRING(15),
  etat_demande: Sequelize.STRING(10),
  prix_prevu: Sequelize.FLOAT,
  lieu_prevu: Sequelize.STRING(15),
  durée_prévu: Sequelize.INTEGER,
  horaire_prevu: Sequelize.STRING(5),
  mode_demande: Sequelize.STRING,
});
module.exports = DemandeFormation;
const Formateur = db.define("formateur", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom_f: Sequelize.STRING(30),
  prenom_f: Sequelize.STRING(30),
  classe_f: Sequelize.STRING,
  fonction_f: Sequelize.STRING,
  cv_f: Sequelize.STRING,
  email_f: Sequelize.STRING,
  tel_f: Sequelize.INTEGER,
  NSS: Sequelize.INTEGER,
  salaire_f: Sequelize.FLOAT,
  specialité_f: Sequelize.STRING,
  adr_f: Sequelize.STRING,
  date_dajout: Sequelize.DATE,
});
module.exports = Formateur;
const Formation = db.define("formation", {
  ref_formation: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  intituleformation: Sequelize.STRING,
  durée_formation: Sequelize.INTEGER,
  horaire_formation: Sequelize.INTEGER,
  nbre_min_part: Sequelize.INTEGER,
  nbre_max_part: Sequelize.INTEGER,
  description_formation: Sequelize.STRING,
  catagorie_formation: Sequelize.STRING,
  prix_formation: Sequelize.STRING,
  Participant: Sequelize.STRING,
  prerequis: Sequelize.STRING,
});
module.exports = Formation;
const IngenieurPedagogique = db.define("ingenieurpedagogique", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom_ing: Sequelize.STRING(30),
  prenom_ing: Sequelize.STRING(30),
  cv_ing: Sequelize.STRING,
  email_ing: Sequelize.STRING,
  tel_ing: Sequelize.INTEGER,
  NSS_ing: Sequelize.INTEGER,
  salaire_ing: Sequelize.FLOAT,
  specialité_ing: Sequelize.STRING,
  adr_ing: Sequelize.STRING,
});
module.exports = IngenieurPedagogique;
const Participant = db.define("particpant", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom_partcipant: Sequelize.STRING(30),
  description: Sequelize.STRING(30),
  carte_identite: Sequelize.INTEGER,
});
module.exports = Participant;
const Session = db.define("session", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  type_sess: Sequelize.STRING,
  mode_session: Sequelize.STRING,
  date_deb_sess: Sequelize.DATE,
  durée_sess: Sequelize.INTEGER,
  horaire_sess: Sequelize.STRING,
  lieu_sess: Sequelize.STRING,
  prix_session: Sequelize.DOUBLE,
  honoraire_sess: Sequelize.DECIMAL,
  frais_sejour: Sequelize.FLOAT,
  frais_transport: Sequelize.FLOAT,
  perdiem: Sequelize.FLOAT,
  autres_frais: Sequelize.FLOAT,
  note_eval_formateur: Sequelize.INTEGER,
});

module.exports = Session;
const Support = db.define("support", {
  id_support: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  titre_support: Sequelize.STRING(30),
  date_support: Sequelize.DATE,
});
module.exports = Support;
const Theme = db.define("theme", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nom_theme: Sequelize.STRING,
});
module.exports = Theme;

const Filieres_metiers = db.define("filieresmetiers", {
  ref_filiere: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  intitulé_filiere: Sequelize.STRING,
});
module.exports = Filieres_metiers;

const MotCle = db.define("motcle", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});
module.exports = MotCle;

const Validation = db.define("validation", {
  ref_val: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  date_val: Sequelize.DATE,
  decision: Sequelize.STRING,
  remarque: Sequelize.STRING,
});
module.exports = Validation;

const Formateur_Formation = db.define("formateur_formation", {
  validation_f: Sequelize.BOOLEAN,
  date_validation: Sequelize.DATE,
});
module.exports = Formateur_Formation;

const Participer = db.define("participer", {
  rapport_eval: Sequelize.STRING,
  note_QCM: Sequelize.FLOAT,
  date_eval: Sequelize.DATE,
});
module.exports = Participer;

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
