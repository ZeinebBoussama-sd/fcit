// const bcrypt = require("bcryptjs");
const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language');
const { ApolloError } = require('apollo-server-core');
const { createWriteStream } = require('fs');

const storeUpload = ({ createReadStream, filename }) =>
  new Promise((resolver, reject) =>
    createReadStream
      .pipe(createWriteStream(`./client/upload/${filename}`))
      .on('finish', () => resolver())
      .on('error', reject)
  );

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
    uploads: (parent, args) => {},
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
    async dateprevue(root, { date_prev }, { models }) {
      return models.DatePrevue.findByPk(date_prev);
    },
    async allDatePrevues(root, args, { models }) {
      return models.DatePrevue.findAll();
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
    async allFichiers(root, args, { models }) {
      return models.Fichier.findAll();
    },
    async metier(root, { code_metier }, { models }) {
      return models.Metier.findByPk(code_metier);
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
    async demandeur(root, { code_demandeur }, { models }) {
      return models.Demandeur.findByPk(code_demandeur);
    },
    async allDemandeurs(root, args, { models }) {
      return models.Demandeur.findAll();
    },
    async formation(root, { CI_formation }, { models }) {
      return models.Formation.findByPk(CI_formation);
    },
    async allFormations(root, args, { models }) {
      return models.Formation.findAll();
    },
    async ingenieurpedagogique(root, { code_IP }, { models }) {
      return models.IngenieurPedagogique.findByPk(code_IP);
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
      return models.Session.findAll();
    },
    async support(root, { code_support }, { models }) {
      return models.Support.findByPk(code_support);
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
    async validation(root, { code_val }, { models }) {
      return models.Validation.findByPk(code_val);
    },
  },

  Mutation: {
    singleUpload: async (parent, args) => {
      const { createReadStream, filename } = await args.file;
      await storeUpload({ createReadStream, filename });
      return true;
    },
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
      //Looking after code client
      const findCodeClient = await models.Client.findOne({
        where: { code_client: args.code_client },
      });
      if (findCodeClient) throw new ApolloError("Code Client already used!!");
      // create client
      const addClient = await models.Client.create({
        code_client: args.code_client,
        pays_client: args.pays_client,
        nom_client: args.nom_client,
        email_client: args.email_client,
        tel_client: args.tel_client,
        adr_client: args.adr_client,
      });
      // create person .
      const addperson =
        args.personne &&
        (await models.Personne.create({
          cin_p: args.personne,
          ClientCodeClient: addClient.code_client,
        }));

      // create Societe.
      const addsociete =
        args.societe &&
        (await models.Societe.create({
          mat_fisc_sc: args.societe,
          responsable: args.responsable,
          ClientCodeClient: addClient.code_client,
        }));

      return addClient;
    },
    async deleteClient(root, args, { models }) {
      //search person /societe
      //looking after person
      const findperson =
        args.code_client &&
        (await models.Personne.findOne({
          where: { ClientCodeClient: args.code_client },
        }));

      //looking after societe
      const findsociete =
        args.code_client &&
        (await models.Societe.findOne({
          where: { ClientCodeClient: args.code_client },
        }));
      if (findsociete && findperson)
        throw new ApolloError("cant find person or societe!");
      //Delete Person
      findperson &&
        (await models.Personne.destroy({
          where: { ClientCodeClient: args.code_client },
        }));
      //Delete Societe
      findsociete &&
        (await models.Societe.destroy({
          where: { ClientCodeClient: args.code_client },
        }));
      //Delete Client
      const deleteClient = await models.Client.destroy({
        where: { code_client: args.code_client },
      });
      return deleteClient;
    },
    async updateClient(root, args, { models }) {
      //looking after person
      const findperson =
        args.code_client &&
        (await models.Personne.findOne({
          where: { ClientCodeClient: args.code_client },
        }));
      //looking after societe
      const findsociete =
        args.code_client &&
        (await models.Societe.findOne({
          where: { ClientCodeClient: args.code_client },
        }));
      //if cin or mart-fisc-sc is changed, then it will be updated
      findperson &&
        findperson.cin_p !== args.personne &&
        (await findperson.update({ cin_p: args.cin_p }));
      findsociete &&
        findsociete.mat_fisc_sc !== args.societe &&
        (await findsociete.update({ mat_fisc_sc: args.societe }));

      //update Client

      const updateClient = await models.Client.update(
        {
          pays_client: args.pays_client,
          nom_client: args.nom_client,
          email_client: args.email_client,
          tel_client: args.tel_client,
          adr_client: args.adr_client,
        },
        { where: { code_client: args.code_client } }
      );
      return updateClient;
    },
    async createPersonne(root, { cin_p, ClientCodeClient }, { models }) {
      return models.Personne.create({
        cin_p,
        ClientCodeClient,
      });
    },
    async createSociete(
      root,
      { mat_fisc_sc, responsable, ClientCodeClient },
      { models }
    ) {
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
        DemandeurCodeDemandeur,
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
        DemandeurCodeDemandeur,
      });
    },
    async createDatePrevue(root, { date_prev }, { models }) {
      return models.DatePrevue.create({
        date_prev,
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
        nom_fichier,
        type_fichier,
        taille_max,
        url_fichier,
        nature_support,
        SupportCodeSupport,
      });
    },
    async updateFichier(root, args, { models }) {
      const updateFichier = await models.Fichier.update(
        {
          nom_fichier: args.nom_fichier,
          type_fichier: args.type_fichier,
          taille_max: args.taille_max,
          url_fichier: args.url_fichier,
          nature_support: args.nature_support,
          SupportCodeSupport: args.SupportCodeSupport,
        },
        { where: { code_fichier: args.code_fichier } }
      );
      return updateFichier;
    },
    async deleteFichier(root, args, { models }) {
      const deleteFichier = await models.Fichier.destroy({
        where: { code_fichier: args.code_fichier },
      });
    },
    async createDemandeur(root, args, { models }) {
      const addDemandeur = await models.Demandeur.create({
        code_demandeur: args.code_demandeur,
        nom_demandeur: args.nom_demandeur,
        prenom_demandeur: args.prenom_demandeur,
        email_demandeur: args.email_demandeur,
        tel_demandeur: args.tel_demandeur,
      });
      return addDemandeur;
    },
    async updateDemandeur(root, args, { models }) {
      const updateDemandeur = await models.Demandeur.update(
        {
          code_demandeur: args.code_demandeur,
          nom_demandeur: args.nom_demandeur,
          prenom_demandeur: args.prenom_demandeur,
          email_demandeur: args.email_demandeur,
          tel_demandeur: args.tel_demandeur,
        },
        { where: { code_demandeur: args.code_demandeur } }
      );
      return updateDemandeur;
    },

    async deleteDemandeur(root, args, { models }) {
      const deleteDemandeur = await models.Demandeur.destroy({
        where: { code_demandeur: args.code_demandeur },
      });
    },
    async createMetier(root, { code_metier, intitule_metier }, { models }) {
      return models.Metier.create({
        code_metier,
        intitule_metier,
      });
    },
    async updateMetier(root, args, { models }) {
      const updateMetier = await models.Metier.update(
        {
          code_metier: args.code_metier,
          intitule_metier: args.intitule_metier,
        },
        { where: { code_metier: args.code_metier } }
      );
      return updateMetier;
    },
    async deleteMetier(root, args, { models }) {
      const deletMetier = await models.Metier.destroy({
        where: { code_metier: args.code_metier },
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
    async createFormateur(root, args, { models }) {
      const cv_f = await args.cv_f;
      const { createReadStream, filename } = cv_f;
      await new Promise((res) =>
        createReadStream()
          .pipe(createWriteStream(path.join(__dirname, '../uploads', filename)))
          .on('close', res)
      );
      const addFormateur = models.Formateur.create({
        code_formateur: args.code_formateur,
        nom_f: args.nom_f,
        prenom_f: args.prenom_f,
        classe_f: args.classe_f,
        fonction_f: args.fonction_f,
        cv_f: args.cv_f,
        email_f: args.email_f,
        tel_f: args.tel_f,
        NSS: args.NSS,
        salaire_f: args.salaire_f,
        adr_f: args.adr_f,
        date_dajout: args.date_dajout,
        cin_f: args.cin_f,
        copie_cin: args.copie_cin,
        passeport_f: args.passeport_f,
        copie_passeport: args.copie_passeport,
        visa_f: args.visa_f,
        val_visa: args.val_visa,
        tarif_f: args.tarif_f,
        RIB_f: args.RIB_f,
        copie_RIB: args.copie_RIB,
      });
      return addFormateur;
    },
    async updateFormateur(root, args, { models }) {
      const updateFormateur = await models.Formateur.update(
        {
          code_formateur: args.code_formateur,
          nom_f: args.nom_f,
          prenom_f: args.prenom_f,
          classe_f: args.classe_f,
          fonction_f: args.fonction_f,
          cv_f: args.cv_f,
          email_f: args.email_f,
          tel_f: args.tel_f,
          NSS: args.NSS,
          salaire_f: args.salaire_f,
          adr_f: args.adr_f,
          date_dajout: args.date_dajout,
          cin_f: args.cin_f,
          copie_cin: args.copie_cin,
          passeport_f: args.passeport_f,
          copie_passeport: args.copie_passeport,
          visa_f: args.visa_f,
          val_visa: args.val_visa,
          tarif_f: args.tarif_f,
          RIB_f: args.RIB_f,
          copie_RIB: args.copie_RIB,
        },
        { where: { code_formateur: args.code_formateur } }
      );
      return updateFormateur;
    },
    async deleteFormateur(root, args, { models }) {
      const deleteFormateur = await models.Formateur.destroy({
        where: { code_formateur: args.code_formateur },
      });
      return deleteFormateur;
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
    async updateFormation(root, args, { models }) {
      const updateFormation = await models.Formation.update(
        {
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
        },
        { where: { CI_formation: args.CI_formation } }
      );
      return updateFormation;
    },
    async deleteFormation(root, args, { models }) {
      const deleteFormation = await models.Formation.destroy({
        where: { CI_formation: args.CI_formation },
      });
      return deleteFormation;
    },
    async createIngenieurPedagogique(
      root,
      {
        code_IP,
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
        code_IP,
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
    async updateIngenieurPedagogique(root, args, { models }) {
      const updateIngenieurPedagogique = await models.IngenieurPedagogique.update(
        {
          nom_ing: arg.nom_ing,
          prenom_ing: args.prenom_ing,
          cv_ing: args.cv_ing,
          email_ing: args.email_ing,
          tel_ing: args.tel_ing,
          NSS_ing: args.NSS_ing,
          salaire_ing: args.salaire_ing,
          specialite_ing: args.specialite_ing,
          adr_ing: args.adr_ing,
        },
        { where: { code_IP: args.code_IP } }
      );
      return updateIngenieurPedagogique;
    },
    async deleteIngenieurPedagogique(root, args, { models }) {
      const deleteIngenieurPedagogique = await models.IngenieurPedagogique.destroy(
        {
          where: { code_IP: args.code_IP },
        }
      );
      return deleteInegnieurPedagogique;
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
    async updateParticipant(root, args, { models }) {
      const updatePartcipant = await models.Participant.update(
        {
          nom_partcipant: args.nom_partcipant,
          prenom_partcipant: args.prenom_partcipant,
          carte_identite: args.carte_identite,
        },
        { where: { code_participant: args.code_participant } }
      );
      return updateParticipant;
    },
    async deleteParticipant(root, args, { models }) {
      const deleteParticipant = await models.Participant.destroy({
        where: { code_partcipant: args.code_participant },
      });
      return this.deleteParticipant;
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
    async createSession(root, args, { models }) {
      const addSession = await models.Session.create({
        code_session: args.code_session,
        type_sess: args.type_sess,
        mode_session: args.mode_session,
        date_deb_sess: args.date_deb_sess,
        duree_sess: args.duree_sess,
        hr_deb_j: args.hr_deb_j,
        hr_fin_j: args.hr_fin_j,
        hr_j_session: args.hr_j_session,
        lieu_sess: args.lieu_sess,
        prix_session: args.prix_session,
        honoraire_sess: args.honoraire_sess,
        frais_sejour: args.frais_sejour,
        frais_transport: args.frais_transport,
        perdiem: args.perdiem,
        autres_frais: args.autres_frais,
        note_eval_formateur: args.note_eval_formateur,
        ClientCodeClient: args.ClientCodeClient,
        FormationCIFormation: args.FormationCIFormation,
        FormateurCodeFormateur: args.FormateurCodeFormateur,
        SupportCodeSupport: args.SupportCodeSupport,
      });
      return addSession;
    },
    async updateSession(root, args, { models }) {
      const updateSession = await models.Support.update(
        {
          type_sess: args.type_sess,
          mode_session: args.mode_session,
          date_deb_sess: args.date_deb_sess,
          duree_sess: args.duree_sess,
          hr_deb_j: args.hr_deb_j,
          hr_fin_j: args.hr_fin_j,
          hr_j_session: args.hr_j_session,
          lieu_sess: args.lieu_sess,
          prix_session: args.prix_session,
          honoraire_sess: args.honoraire_sess,
          frais_sejour: args.frais_sejour,
          frais_transport: args.frais_transport,
          perdiem: args.perdiem,
          autres_frais: args.autres_frais,
          note_eval_formateur: args.note_eval_formateur,
          ClientCodeClient: args.ClientCodeClient,
          FormationCIFormation: args.FormationCIFormation,
          FormateurCodeFormateur: args.FormateurCodeFormateur,
          SupportCodeSupport: args.SupportCodeSupport,
        },
        { where: { code_session: args.code_session } }
      );
      return updateSession;
    },
    async deleteSession(root, args, { models }) {
      const deleteSession = await models.Session.destroy({
        where: { code_session: args.code_session },
      });
      return deleteSession;
    },
    async createSupport(root, { titre_support, date_support }, { models }) {
      return models.Support.create({
        titre_support,
        date_support,
      });
    },
    async updateSupport(root, args, { models }) {
      const updateSupport = await models.Support.update(
        {
          titre_support: args.titre_support,
          date_support: args.date_support,
        },
        { where: { code_support: args.code_support } }
      );
      return updateSupport;
    },

    async deleteSupport(root, args, { models }) {
      const deleteSupport = await models.Support.destroy({
        where: { code_support: args.code_support },
      });
      return deleteSupport;
    },
    async createTheme(root, args, { models }) {
      const findThemaByID =
        args.code_theme &&
        (await models.Theme.findOne({
          where: { code_theme: args.code_theme },
        }));
      if (findThemaByID)
        throw new ApolloError("this Code Theme is already created");

      const findThemaByName =
        args.nom_theme &&
        (await models.Theme.findOne({
          where: { nom_theme: args.nom_theme },
        }));
      if (findThemaByName)
        throw new ApolloError("this nom Theme is already created");

      const addThema = await models.Theme.create({
        code_theme: args.code_theme,
        nom_theme: args.nom_theme,
      });
      return addThema;
    },
    async updateTheme(root, args, { models }) {
      const updatecTheme = await models.Theme.update(
        {
          code_theme: args.code_theme,
          nom_theme: args.nom_theme,
        },
        { where: { code_theme: args.code_theme } }
      );
      return updateTheme;
    },
    async deleteTheme(root, args, { models }) {
      const deleteTheme = await models.Theme.destroy({
        where: { code_theme: args.code_theme },
      });
      return deleteTheme;
    },
    async createValidation(
      root,
      {
        date_val,
        remarque,
        decision_r,
        decision_f,
        FormateurCodeFormateur,
        IngenieurPedagogiqueCodeIP,
        SupportCodeSupport,
      },
      { models }
    ) {
      return models.Validation.create({
        date_val,
        remarque,
        decision_r,
        decision_f,
        FormateurCodeFormateur,
        IngenieurPedagogiqueCodeIP,
        SupportCodeSupport,
      });
    },
    async updateValidation(root, args, { models }) {
      const updateValidation = await models.Validation.update(
        {
          date_val: args.date_val,
          remarque: args.remarque,
          decision_r: args.decision_r,
          decision_f: args.decision_f,
          FormateurCodeFormateur: args.FormateurCodeFormateur,
          IngenieurPedagogiqueCodeIP: args.IngenieurPedagogiqueCodeIP,
          SupportCodeSupport: args.SupportCodeSupport,
        },
        { where: { code_val: args.code_val } }
      );
      return updateValidation;
    },
    async deleteValidation(root, args, { models }) {
      const deleteValidation = await models.Validation.destroy({
        where: { code_val: args.code_val },
      });
      return deleteValidation;
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
    async participant(client) {
      return client.getParticipant();
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
    async demandeur(demandeformation) {
      return demandeformation.getDemandeur();
    },
    async dateprevue(demandeformation) {
      return demandeformation.getDatePrevue();
    },
  },
  DatePrevue: {
    async demandeformation(dateprevue) {
      return dateprevue.getDemandeFormation();
    },
  },
  Fichier: {
    async support(fichier) {
      return fichier.getSupport();
    },
  },
  Metier: {
    async formation(metiers) {
      return metiers.getFormation();
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
      return formation.getDemandeFormations();
    },
    async theme(formation) {
      return formation.getTheme();
    },
    async metiers(formation) {
      return formation.getMetiers();
    },
    async motcle(formation) {
      return formation.getMotCles();
    },
    async session(formation) {
      return formation.getSessions();
    },
    async formateur(formation) {
      return formation.getFormateurs();
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
    async client(participant) {
      return participant.getClient();
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
      return session.getFormateur();
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
      return support.getSessions();
    },
    async validation(support) {
      return support.getValidations();
    },
    async fichier(support) {
      return support.getFichiers();
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
  Demandeur: {
    async demandeformation(validation) {
      return validation.getDemandeFormation();
    },
  },
};
module.exports = resolvers;
