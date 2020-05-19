// const bcrypt = require("bcryptjs");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");
const { ApolloError } = require("apollo-server-core");
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
      return models.Client.findByPk(id);
    },
    async allClients(root, args, { models }) {
      return models.Client.findAll();
    },
    async personne(root, { id }, { models }) {
      return models.Personne.findByPk(id);
    },
    async societe(root, { id }, { models }) {
      return models.Societe.findByPk(id);
    },
    async demandeformation(root, { id }, { models }) {
      return models.DemandeFormation.findByPk(id);
    },
    async allDemandeFormations(root, args, { models }) {
      return models.DemandeFormation.findAll();
    },
    async fichier(root, { id }, { models }) {
      return models.Fichier.findByPk(id);
    },
    async filieres_metiers(root, { id }, { models }) {
      return models.Filieres_metiers.findByPk(id);
    },
    async formateur_formation(root, { id }, { models }) {
      return models.Formateur_Formation.findByPk(id);
    },
    async formateur(root, { id }, { models }) {
      return models.Formateur.findByPk(id);
    },
    async allFormateurs(root, args, { models }) {
      return models.Formateur.findAll();
    },
    async formation(root, { id }, { models }) {
      return models.Formation.findByPk(id);
    },
    async allFormations(root, args, { models }) {
      return models.Formation.findAll();
    },
    async ingenieurpedagogique(root, { id }, { models }) {
      return models.Recipe.findByPk(id);
    },
    async allIngenieurPedagogiques(root, args, { models }) {
      return models.IngenieurPedagogique.findAll();
    },
    async motcle(root, { id }, { models }) {
      return models.MotCle.findByPk(id);
    },
    async participant(root, { id }, { models }) {
      return models.Participant.findByPk(id);
    },
    async participer(root, { id }, { models }) {
      return models.Participer.findByPk(id);
    },
    async session(root, { id }, { models }) {
      return models.Session.findByPk(id);
    },
    async allSessions(root, args, { models }) {
      return models.Support.findAll();
    },
    async support(root, { id }, { models }) {
      return models.Support.findByPk(id);
    },
    async allSupports(root, args, { models }) {
      return models.Support.findAll();
    },
    async theme(root, { id }, { models }) {
      return models.Theme.findByPk(id);
    },
    async allThemes(root, args, { models }) {
      return models.Theme.findAll();
    },
    async validation(root, { id }, { models }) {
      return models.Validation.findByPk(id);
    },
  },

  Mutation: {
    async createClient(root, args, { models }) {
      //looking if you add both cin-p and mat_fisc_sc
      if (args.personne & args.societe)
        throw new ApolloError("can't add both Person and societe");

      //lookin after person
      const findperson =
        args.personne &&
        (await models.Personne.findOne({
          where: { cin_p: args.personne },
        }));
      if (findperson) throw new ApolloError("this cin_p is already created");

      //looking after societe
      const findsociete =
        args.personne &&
        (await models.Societe.findOne({
          where: { mat_fisc_sc: args.personne },
        }));
      if (findsociete)
        throw new ApolloError("this mat_fisc_sc is already created");

      // if you have cin_p you create it.
      const addperson =
        args.personne &&
        (await models.Personne.create({ cin_p: args.personne }));

      // if you have mat_fisc_sc you create it.
      const addsociete =
        args.societe &&
        (await models.Societe.create({ mat_fisc_sc: args.societe }));

      // create client
      const addClient = await models.Client.create({
        nom_client: args.nom_client,
        email_client: args.email_client,
        tel_client: args.tel_client,
        Adr_client: args.Adr_client,
        PersonneId: addperson && addperson.id,
        SocieteId: addsociete && addsociete.id,
      });
      return addClient;
    },
    async deleteClient(root, { id }, { models }) {
      return models.Client.destroy({ where: { id: id } });
    },
    async updateClient(
      root,
      {
        id,
        nom_client,
        email_client,
        tel_client,
        Adr_client,
        PersonneId,
        SocieteId,
      },
      { models }
    ) {
      return models.Client.update(
        {
          nom_client,
          email_client,
          tel_client,
          Adr_client,
          PersonneId,
          SocieteId,
        },
        { where: { id: id } }
      );
    },
    async createPersonne(root, { cin_p }, { models }) {
      return models.Personne.create({
        cin_p,
      });
    },
    async createSociete(root, { mat_fisc_sc }, { models }) {
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
      },
      { models }
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
    async createFichier(
      root,
      {
        nom_fichier,
        type_fichier,
        taille_max,
        url_fichier,
        nature_support,
        SupportId,
      },
      { models }
    ) {
      return models.Fichier.create({
        type_fichier,
        taille_max,
        url_fichier,
        nature_support,
        SupportId,
      });
    },
    async createFilieres_metiers(root, { intitule_filiere }, { models }) {
      return models.Filieres_metiers.create({
        intitule_filiere,
      });
    },
    async createFormateur_Formation(
      root,
      { validation_f, date_validation, FormationId, FormateurId },
      { models }
    ) {
      return models.Formateur_Formation.create({
        validation_f,
        date_validation,
        FormationId,
        FormateurId,
      });
    },
    async createFormateur(
      root,
      {
        nom_f,
        prenom_f,
        classe_f,
        fonction_f,
        cv_f,
        email_f,
        tel_f,
        NSS,
        salaire_f,
        specialite_f,
        adr_f,
        date_dajout,
      },
      { models }
    ) {
      return models.Formateur.create({
        nom_f,
        prenom_f,
        classe_f,
        fonction_f,
        cv_f,
        email_f,
        tel_f,
        NSS,
        salaire_f,
        specialite_f,
        adr_f,
        date_dajout,
      });
    },
    createFormation(
      root,
      {
        intitule,
        duree_formation,
        horaire_formation,
        nbre_min_part,
        nbre_max_part,
        description_formation,
        catagorie_formation,
        prix_formation,
        participant,
        prerequis,
        ThemeId,
      },
      { models }
    ) {
      return models.Formation.create({
        intitule,
        duree_formation,
        horaire_formation,
        nbre_min_part,
        nbre_max_part,
        description_formation,
        catagorie_formation,
        prix_formation,
        participant,
        prerequis,
        ThemeId,
      });
    },

    createIngenieurPedagogique(
      root,
      {
        nom_ing,
        prenom_ing,
        cv_ing,
        email_ing,
        tel_ing,
        NSS_ing,
        salaire_ing,
        specialite_ing,
        adr_ing,
      },
      { models }
    ) {
      return models.IngenieurPedagogique.create({
        nom_ing,
        prenom_ing,
        cv_ing,
        email_ing,
        tel_ing,
        NSS_ing,
        salaire_ing,
        specialite_ing,
        adr_ing,
      });
    },
    createParticipant(
      root,
      { nom_partcipant, prenom_partcipant, carte_identite },
      { models }
    ) {
      return models.Participant.create({
        nom_partcipant,
        prenom_partcipant,
        carte_identite,
      });
    },
    createParticiper(
      root,
      { rapport_eval, note_QCM, date_eval, ParticipantId, SessionId },
      { models }
    ) {
      return models.Participer.create({
        rapport_eval,
        note_QCM,
        date_eval,
        ParticipantId,
        SessionId,
      });
    },
    createSession(
      root,
      {
        type_sess,
        mode_session,
        date_deb_sess,
        duree_sess,
        horaire_sess,
        lieu_sess,
        prix_session,
        honoraire_sess,
        frais_sejour,
        frais_transport,
        perdiem,
        autres_frais,
        note_eval_formateur,
        ClientId,
        FormationId,
        FormateurId,
        SupportId,
      },
      { models }
    ) {
      return models.Session.create({
        type_sess,
        mode_session,
        date_deb_sess,
        duree_sess,
        horaire_sess,
        lieu_sess,
        prix_session,
        honoraire_sess,
        frais_sejour,
        frais_transport,
        perdiem,
        autres_frais,
        note_eval_formateur,
        ClientId,
        FormationId,
        FormateurId,
        SupportId,
      });
    },
    createSupport(root, { titre_support, date_support }, { models }) {
      return models.Support.create({
        titre_support,
        date_support,
      });
    },
    createTheme(root, { nom_theme }, { models }) {
      return models.Theme.create({
        nom_theme,
      });
    },
    createValidation(
      root,
      {
        date_val,
        decision,
        remarque,
        FormateurId,
        IngenieurPedagogiqueId,
        SupportId,
      },
      { models }
    ) {
      return models.Validation.create({
        ate_val,
        decision,
        remarque,
        FormateurId,
        IngenieurPedagogiqueId,
        SupportId,
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
    async demandeformation(client) {
      return client.getDemandeFormation;
    },
    async session(client) {
      return client.getSession;
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
  DemandeFormation: {
    async client(demandeformation) {
      return demandeformation.getClient;
    },
    async formation(demandeformation) {
      return demandeformation.getFormation;
    },
  },
  Fichier: {
    async support(fichier) {
      return fichier.getSupport;
    },
  },
  Filieres_metiers: {
    async formation(filieres_metiers) {
      return filieres_metiers.getFormation;
    },
  },
  Formateur_Formation: {
    async formateur(formateur_formation) {
      return formateur_formation.getFormation;
    },
    async formation(formateur_formation) {
      return formateur_formation.getformateur;
    },
  },
  Formateur: {
    async session(formateur) {
      return formateur.getSession;
    },
    async formation(formateur) {
      return formateur.getFormation;
    },
    async validation(formateur) {
      return formateur.getValidation;
    },
  },
  Formation: {
    async demandeformation(formation) {
      return formation.getDemandeFormation;
    },
    async theme(formation) {
      return formation.getTheme;
    },
    async filieres_metiers(formation) {
      return formation.getFilieres_metiers;
    },
    async motcle(formation) {
      return formation.getMotCle;
    },
    async session(formation) {
      return formation.getSession;
    },
    async formateur(formation) {
      return formation.getformateur;
    },
  },
  IngenieurPedagogique: {
    async validation(ingenieurpedagogique) {
      return ingenieurpedagogique.getValidation;
    },
  },
  Participant: {
    async session(participant) {
      return participant.getSession;
    },
  },
  Participer: {
    async participant(participer) {
      return participer.getParticipant;
    },
    async session(participer) {
      return participer.getSession;
    },
  },
  Session: {
    async formateur(session) {
      return session.getformateur;
    },
    async participant(session) {
      return session.getParticipant;
    },
    async client(session) {
      return session.getClient;
    },
    async formation(session) {
      return session.getFormation;
    },
    async support(session) {
      return session.getSupport;
    },
  },
  Support: {
    async session(support) {
      return support.getSession;
    },
    async validation(support) {
      return support.getValidation;
    },
    async fichier(support) {
      return support.getFichier;
    },
  },
  Theme: {
    async formation(theme) {
      return theme.getFormation;
    },
  },
  Validation: {
    async formateur(validation) {
      return validation.getformateur;
    },
    async ingenieurpedagogique(validation) {
      return validation.getIngenieurPedagogique;
    },
    async support(validation) {
      return validation.getSupport;
    },
  },
};
module.exports = resolvers;
