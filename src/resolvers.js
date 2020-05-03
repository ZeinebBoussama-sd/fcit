// const bcrypt = require("bcryptjs");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");
const resolvers = {
  Date: new GraphQLScalarType({
    name: "Date",
    description: "Date custom scalar type",
    parseValue(value) {
      return new Date(value); // value from the client
    },
    serialize(value) {
      return value.getTime(); // value sent to the client
    },
    parseLiteral(ast) {
      if (ast.kind === Kind.INT) {
        return parseInt(ast.value, 10); // ast value is always in string format
      }
      return null;
    },
  }),
  Query: {
    async client(root, { id }, { models }) {
      return models.Client.findById(id);
    },
    async allClient(root, args, { models }) {
      return models.Client.findAll();
    },
    async personne(root, { id }, { models }) {
      return models.Personne.findById(id);
    },
    async societe(root, { id }, { models }) {
      return models.Societe.findById(id);
    },
    async demandeformation(root, { id }, { models }) {
      return models.DemandeFormation.findById(id);
    },
    async fichier(root, { id }, { models }) {
      return models.Fichier.findById(id);
    },
    async filieres_metiers(root, { id }, { models }) {
      return models.Filieres_metiers.findById(id);
    },
    async formateur_formation(root, { id }, { models }) {
      return models.Formateur_Formation.findById(id);
    },
    async formateur(root, { id }, { models }) {
      return models.Formateur.findById(id);
    },
    async formation(root, { id }, { models }) {
      return models.Formation.findById(id);
    },
    async ingenieurpedagogique(root, { id }, { models }) {
      return models.Recipe.findById(id);
    },
    async motcle(root, { id }, { models }) {
      return models.MotCle.findById(id);
    },
    async participant(root, { id }, { models }) {
      return models.Participant.findById(id);
    },
    async participer(root, { id }, { models }) {
      return models.Participer.findById(id);
    },
    async session(root, { id }, { models }) {
      return models.Session.findById(id);
    },
    async support(root, { id }, { models }) {
      return models.Support.findById(id);
    },
    async theme(root, { id }, { models }) {
      return models.Theme.findById(id);
    },
    async validation(root, { id }, { models }) {
      return models.Validation.findById(id);
    },
  },

  Mutation: {
    async createClient(
      root,
      {
        nom_client,
        email_client,
        tel_client,
        Adr_client,
        PersonneId,
        SocieteId,
      }
    ) {
      return models.Client.create({
        nom_client,
        email_client,
        tel_client,
        Adr_client,
        PersonneId,
        SocieteId,
      });
    },
    async createPersonne(root, { cin_p }) {
      return models.Personne.create({
        cin_p,
      });
    },
    async createSociete(root, { mat_fisc_sc }) {
      return models.Societe.create({
        mat_fisc_sc,
      });
    },
    async createDemandeFormation(
      root,
      {
        date_demande,
        date_deb_prevue,
        type_demande,
        etat_demande,
        prix_prevu,
        lieu_prevu,
        duree_prevu,
        horaire_prevu,
        mode_demande,
        ClientId,
        FormationId,
      }
    ) {
      return models.DemandeFormation.create({
        date_demande,
        date_deb_prevue,
        type_demande,
        etat_demande,
        prix_prevu,
        lieu_prevu,
        duree_prevu,
        horaire_prevu,
        mode_demande,
        ClientId,
        FormationId,
      });
    },
  },
  Client: {
    async personne(client) {
      return client.getPersonne();
    },
    async societe(client) {
      return client.getSociete;
    },
  },
  Personne: {
    async client(personne) {
      return personne.getClient();
    },
  },
  Societe: {
    async client(societe) {
      return societe.getClient();
    },
  },
};
module.exports = resolvers;
