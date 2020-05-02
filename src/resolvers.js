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
    async Client(root, { nom_client }, { models }) {
      return models.Client.findById(nom_client);
    },
    async allClient(root, args, { models }) {
      return models.Client.findAll();
    },
    async Personne(root, { cin_p }, { models }) {
      return models.Personne.findById(cin_p);
    },
    async Societe(root, { mat_fisc_sc }, { models }) {
      return models.Societe.findById(mat_fisc_sc);
    },
    async DemandeFormation(root, { date_demande }, { models }) {
      return models.DemandeFormation.findById(date_demande);
    },
    async Fichier(root, { nom_fichier }, { models }) {
      return models.Fichier.findById(nom_fichier);
    },
    async Filieres_metiers(root, { intitule_filiere }, { models }) {
      return models.Filieres_metiers.findById(intitule_filiere);
    },
    async Formateur_Formation(root, { date_validation }, { models }) {
      return models.Formateur_Formation.findById(date_validation);
    },
    async Formateur(root, { nom_formateur }, { models }) {
      return models.Formateur.findById(nom_formateur);
    },
    async Formation(root, { intitule }, { models }) {
      return models.Formation.findById(intitule);
    },
    async IngenieurPedagogique(root, { id }, { models }) {
      return models.Recipe.findById(id);
    },
    async MotCle(root, { id }, { models }) {
      return models.MotCle.findById(id);
    },
    async Participant(root, { carte_identite }, { models }) {
      return models.Participant.findById(carte_identite);
    },
    async Participer(root, { date_eval }, { models }) {
      return models.Participer.findById(date_eval);
    },
    async Session(root, { id }, { models }) {
      return models.Session.findById(id);
    },
    async Support(root, { titre_support }, { models }) {
      return models.Support.findById(titre_support);
    },
    async Theme(root, { nom_theme }, { models }) {
      return models.Theme.findById(nom_theme);
    },
    async Validation(root, { date_val }, { models }) {
      return models.Validation.findById(date_val);
    },
  },

  Mutation: {
    async createClient(
      root,
      { nom_client, email_client, tel_client, Adr_client, PersonneId }
    ) {
      return models.Client.create({
        nom_client,
        email_client,
        tel_client,
        Adr_client,
        PersonneId,
      });
    },
    async createPersonne(root, { cin_p }) {
      return models.Personne.create({
        cin_p,
      });
    },
  },
  Client: {
    async Personne(Client) {
      return Client.getPersonne();
    },
  },
  Personne: {
    async Client(Personne) {
      return Personne.getClient();
    },
  },
};
module.exports = resolvers;
