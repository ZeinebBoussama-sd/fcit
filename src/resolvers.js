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
    async client(root, { code_client }, { models }) {
      return models.Client.findByPk(code_client);
    },
    async allClients(root, args, { models }) {
      return models.Client.findAll();
    },
    async personne(root, res, { models }) {
      return models.Personne.findOne({
        where: { cin_p: res.cin_p },
      });
    },
    async societe(root, res, { models }) {
      return models.Societe.findOne({
        where: { mat_fisc_sc: res.mat_fisc_sc },
      });
    },
    async demandeformation(root, { code_demande }, { models }) {
      return models.DemandeFormation.findByPk(code_demande);
    },
    async allDemandeFormations(root, args, { models }) {
      return models.DemandeFormation.findAll();
    },
    async fichier(root, { code_fichier }, { models }) {
      return models.Fichier.findByPk(code_fichier);
    },
    async filieres_metiers(root, { id }, { models }) {
      return models.Filieres_metiers.findByPk(id);
    },
    async formateur_formation(root, { id }, { models }) {
      return models.Formateur_Formation.findByPk(id);
    },
    async formateur(root, { code_formateur }, { models }) {
      return models.Formateur.findByPk(code_formateur);
    },
    async allFormateurs(root, args, { models }) {
      return models.Formateur.findAll();
    },
    async formation(root, { CI_formation }, { models }) {
      return models.Formation.findByPk(CI_formation);
    },
    async allFormations(root, args, { models }) {
      return models.Formation.findAll();
    },
    async ingenieurpedagogique(root, { code_IP }, { models }) {
      return models.Recipe.findByPk(code_IP);
    },
    async allIngenieurPedagogiques(root, args, { models }) {
      return models.IngenieurPedagogique.findAll();
    },
    async motcle(root, { motcle }, { models }) {
      return models.MotCle.findByPk(motcle);
    },
    async participant(root, { code_participant }, { models }) {
      return models.Participant.findByPk(code_participant);
    },
    async participer(root, { id }, { models }) {
      return models.Participer.findByPk(id);
    },
    async session(root, { CI_session }, { models }) {
      return models.Session.findByPk(CI_session);
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
    async theme(root, { code_theme }, { models }) {
      return models.Theme.findByPk(code_theme);
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
        args.societe &&
        (await models.Societe.findOne({
          where: { mat_fisc_sc: args.societe },
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
        (await models.Societe.create({
          mat_fisc_sc: args.mat_fisc_sc,
          responsable: args.responsable,
        }));

      // create client
      const addClient = await models.Client.create({
        code_client: args.code_client,
        pays_client: args.pays_client,
        nom_client: args.nom_client,
        email_client: args.email_client,
        tel_client: args.tel_client,
        adr_client: args.adr_client,
        PersonneCinP: addperson && addperson.cin_p,
        SocieteMatFiscSc: addsociete && addsociete.mat_fisc_sc,
      });
      return addClient;
    },
    async deleteClient(root, { code_client }, { models }) {
      return models.Client.destroy({ where: { code_client: code_client } });
    },
    async updateClient(
      root,
      {
        code_client,
        pays_client,
        nom_client,
        email_client,
        tel_client,
        Adr_client,
        PersonneCinP,
        SocieteMatFiscSc,
      },
      { models }
    ) {
      return models.Client.update(
        {
          code_client,
          pays_client,
          nom_client,
          email_client,
          tel_client,
          Adr_client,
          PersonneCinP,
          SocieteMatFiscSc,
        },
        { where: { code_client: code_client } }
      );
    },
    async createPersonne(root, { cin_p }, { models }) {
      return models.Personne.create({
        cin_p,
        ClientCodeClient,
      });
    },
    async createSociete(root, { mat_fisc_sc, responsable }, { models }) {
      return models.Societe.create({
        mat_fisc_sc,
        responsable,
        ClientCodeClient,
      });
    },
    async createDemandeFormation(
      root,
      {
        date_demande,
        type_demande,
        etat_demande,
        prix_prevu,
        lieu_prevu,
        duree_prevu,
        mode_demande,
        hr_deb_j_prev,
        hr_fin_j_prev,
        hr_j_prev,
        ClientCodeClient,
        FormationCIFormation,
      },
      { models }
    ) {
      return models.DemandeFormation.create({
        date_demande,
        type_demande,
        etat_demande,
        prix_prevu,
        lieu_prevu,
        duree_prevu,
        mode_demande,
        hr_deb_j_prev,
        hr_fin_j_prev,
        hr_j_prev,
        ClientCodeClient,
        FormationCIFormation,
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
        SupportCodeSupport,
      },
      { models }
    ) {
      return models.Fichier.create({
        type_fichier,
        taille_max,
        url_fichier,
        nature_support,
        SupportCodeSupport,
      });
    },
    async createFilieres_metiers(
      root,
      { code_intitule_filiere, intitule_filiere },
      { models }
    ) {
      return models.Filieres_metiers.create({
        code_intitule_filiere,
        intitule_filiere,
      });
    },
    async createFormateur_Formation(
      root,
      {
        validation_f,
        date_validation,
        FormationCIFormation,
        FormateurCodeFormateur,
      },
      { models }
    ) {
      return models.Formateur_Formation.create({
        validation_f,
        date_validation,
        FormationCIFormation,
        FormateurCodeFormateur,
      });
    },
    async createFormateur(
      root,
      {
        code_formateur,
        nom_f,
        prenom_f,
        classe_f,
        fonction_f,
        cv_f,
        email_f,
        tel_f,
        NSS,
        salaire_f,
        adr_f,
        date_dajout,
        cin_f,
        copie_cin,
        passeport_f,
        copie_passeport,
        visa_f,
        val_visa,
        tarif_f,
        RIB_f,
        copie_RIB,
      },
      { models }
    ) {
      return models.Formateur.create({
        code_formateur,
        nom_f,
        prenom_f,
        classe_f,
        fonction_f,
        cv_f,
        email_f,
        tel_f,
        NSS,
        salaire_f,
        adr_f,
        date_dajout,
        cin_f,
        copie_cin,
        passeport_f,
        copie_passeport,
        visa_f,
        val_visa,
        tarif_f,
        RIB_f,
        copie_RIB,
      });
    },
    async createFormation(root, args, { models }) {
      const addFormation = await models.Formation.create({
        code_formation: args.code_formation,
        intitule: args.intitule,
        duree_formation: args.duree_formation,
        nbre_min_part: args.nbre_min_part,
        description_formation: args.description_formation,
        catagorie_formation: args.catagorie_formation,
        prix_formation: args.prix_formation,
        participant: args.participant,
        prerequis: args.prerequis,
        ThemeCodeTheme: args.ThemeCodeTheme,
      });
      return addFormation;
    },

    async createIngenieurPedagogique(
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
    async createParticipant(
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
    async createMotCle(root, { motcle }, { models }) {
      return models.MotCle.create({
        motcle,
      });
    },
    async createParticiper(
      root,
      {
        rapport_eval,
        note_QCM,
        date_eval,
        ParticipantCodeParticipant,
        SessionCISession,
      },
      { models }
    ) {
      return models.Participer.create({
        rapport_eval,
        note_QCM,
        date_eval,
        ParticipantCodeParticipant,
        SessionCISession,
      });
    },
    async createSession(
      root,
      {
        code_session,
        type_sess,
        mode_session,
        date_deb_sess,
        duree_sess,
        hr_debut_j,
        hr_fin_j,
        hr_j,
        lieu_sess,
        prix_session,
        honoraire_sess,
        frais_sejour,
        frais_transport,
        perdiem,
        autres_frais,
        note_eval_formateur,
        ClientCodeClient,
        FormationCIFormation,
        FormateurCodeFormateur,
        SupportCodeSupport,
      },
      { models }
    ) {
      return models.Session.create({
        code_session,
        type_sess,
        mode_session,
        date_deb_sess,
        duree_sess,
        hr_debut_j,
        hr_fin_j,
        hr_j,
        lieu_sess,
        prix_session,
        honoraire_sess,
        frais_sejour,
        frais_transport,
        perdiem,
        autres_frais,
        note_eval_formateur,
        ClientCodeClient,
        FormationCIFormation,
        FormateurCodeFormateur,
        SupportCodeSupport,
      });
    },
    async createSupport(root, { titre_support, date_support }, { models }) {
      return models.Support.create({
        titre_support,
        date_support,
      });
    },
    async createTheme(root, { nom_theme }, { models }) {
      return models.Theme.create({
        code_theme,
        nom_theme,
      });
    },
    async createValidation(
      root,
      {
        code_val,
        date_val,
        remarque,
        decision_R,
        decision_F,
        FormateurCodeFormateur,
        IngenieurPedagogiqueId,
        SupportId,
      },
      { models }
    ) {
      return models.Validation.create({
        code_val,
        date_val,
        remarque,
        decision_R,
        decision_F,
        FormateurCodeFormateur,
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
      return client.getSociete();
    },
    async demandeformation(client) {
      return client.getDemandeFormation();
    },
    async session(client) {
      return client.getSession();
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
      return demandeformation.getClient();
    },
    async formation(demandeformation) {
      return demandeformation.getFormation();
    },
  },
  Fichier: {
    async support(fichier) {
      return fichier.getSupport();
    },
  },
  Filieres_metiers: {
    async formation(filieres_metiers) {
      return filieres_metiers.getFormation();
    },
  },
  Formateur_Formation: {
    async formateur(formateur_formation) {
      return formateur_formation.getFormation();
    },
    async formation(formateur_formation) {
      return formateur_formation.getformateur();
    },
  },
  Formateur: {
    async session(formateur) {
      return formateur.getSession();
    },
    async formation(formateur) {
      return formateur.getFormation();
    },
    async validation(formateur) {
      return formateur.getValidation();
    },
  },
  Formation: {
    async demandeformation(formation) {
      return formation.getDemandeFormation();
    },
    async theme(formation) {
      return formation.getTheme();
    },
    async filieres_metiers(formation) {
      return formation.getFilieres_metiers();
    },
    async motcle(formation) {
      return formation.getMotCle();
    },
    async session(formation) {
      return formation.getSession();
    },
    async formateur(formation) {
      return formation.getformateur();
    },
  },
  IngenieurPedagogique: {
    async validation(ingenieurpedagogique) {
      return ingenieurpedagogique.getValidation();
    },
  },
  Participant: {
    async session(participant) {
      return participant.getSession();
    },
  },
  Participer: {
    async participant(participer) {
      return participer.getParticipant();
    },
    async session(participer) {
      return participer.getSession();
    },
  },
  Session: {
    async formateur(session) {
      return session.getformateur();
    },
    async participant(session) {
      return session.getParticipant();
    },
    async client(session) {
      return session.getClient();
    },
    async formation(session) {
      return session.getFormation();
    },
    async support(session) {
      return session.getSupport();
    },
  },
  Support: {
    async session(support) {
      return support.getSession();
    },
    async validation(support) {
      return support.getValidation();
    },
    async fichier(support) {
      return support.getFichier();
    },
  },
  Theme: {
    async formation(theme) {
      return theme.getFormation();
    },
  },
  Validation: {
    async formateur(validation) {
      return validation.getformateur();
    },
    async ingenieurpedagogique(validation) {
      return validation.getIngenieurPedagogique();
    },
    async support(validation) {
      return validation.getSupport();
    },
  },
};
module.exports = resolvers;
