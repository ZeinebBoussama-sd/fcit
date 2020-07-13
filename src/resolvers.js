const { hash, compare } = require("bcryptjs");
const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");
const { ApolloError } = require("apollo-server-core");
const fs = require("fs");
const request = require("request");
const formidable = require("formidable");
const { Op } = require("sequelize");
const sendRefreshToken = require("./sendRefreshToken");
const { combineResolvers } = require("graphql-resolvers");
const { sign } = require("jsonwebtoken");
const createRefreshToken = require("./auth");
const createAccessToken = require("./auth");
const isAuth = require("./isAuth");
const { verify } = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const { JSONCookie } = require("cookie-parser");

const storeUpload = (file, folder, ID, type) => {
  if (!!file) {
    const { filename, stream } = file;
    const folderPath = `./src/upload/${ID}/${type}/${folder}`;
    fs.access(folderPath, (error) => {
      if (!error) {
        try {
          fs.access(`${folderPath}/${filename}`, fs.F_OK, (err) => {
            if (err) {
              fs.createWriteStream(`${folderPath}/${filename}`);
              console.log(`${filename} is uploaded`);
              const path = `${folderPath}/${filename}`;
              return new Promise((resolve, reject) =>
                stream
                  .pipe(fs.createWriteStream(path))
                  .on("finish", () => resolve({ ID, path, filename }))
                  .on("error", reject)
              );
            } else {
              console.log("file already exict");
              return "file exict";
            }
          });
        } catch (error) {
          console.log(error);
        }
      } else {
        try {
          fs.mkdirSync(folderPath, {
            recursive: true,
          });
          console.log(`${filename} is uploaded`);
          const path = `${folderPath}/${filename}`;
          return new Promise((resolve, reject) =>
            stream
              .pipe(fs.createWriteStream(path))
              .on("finish", () => resolve({ ID, path, filename }))
              .on("error", reject)
          );
        } catch (e) {
          console.log(e);
          // fs.mkdirpath(path.dirname(dirPath));
          // fs.mkdirpath("./client/upload");
        }
      }
    });
  }
};

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

    // async me(root, args, { models, context }) {
    //   const authorization = context.req.headers["authorization"];

    //   if (!authorization) {
    //     return null;
    //   }

    //   try {
    //     const token = authorization.split(" ")[1];
    //     const payload = verify(token, process.env.ACCESS_TOKEN_SECRET);
    //     return models.IngenieurPedagogique.findOne({
    //       where: { code_IP: payload.userId },
    //     });
    //   } catch (err) {
    //     console.log(err);
    //     return null;
    //   }
    // },

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
      return models.Metiers.findByPk(code_metier);
    },
    async allMetiers(root, args, { models }) {
      return models.Metiers.findAll();
    },
    async allFormateurs_Formations(root, args, { models }) {
      const findAll = await models.Formateur_Formation.findAll({
        include: [
          {
            model: models.Formateur,
          },
          {
            model: models.Formation,
          },
        ],
      });
      return findAll;
    },
    async formateur_formation(root, args, { models }) {
      const FormationCIFormation = args.FormationCIFormation
        ? args.FormationCIFormation
        : null;
      const FormateurCodeFormateur = args.FormateurCodeFormateur
        ? args.FormateurCodeFormateur
        : null;
      const ff_List =
        FormationCIFormation && FormateurCodeFormateur
          ? await models.Formateur_Formation.findAll({
              where: {
                [Op.and]: [
                  { FormateurCodeFormateur: FormateurCodeFormateur },
                  { FormationCIFormation: FormationCIFormation },
                ],
              },
            })
          : await models.Formateur_Formation.findAll({
              where: {
                [Op.or]: [
                  { FormateurCodeFormateur: FormateurCodeFormateur },
                  { FormationCIFormation: FormationCIFormation },
                ],
              },
            });

      return ff_List;
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
      const allFormations = await models.Formation.findAll();
      return allFormations;
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
    async allMotCles(root, args, { models }) {
      return models.MotCle.findAll();
    },
    async participant(root, { code_participant }, { models }) {
      return models.Participant.findByPk(code_participant);
    },
    async allParticipants(root, args, { models }) {
      return models.Participant.findAll();
    },
    async participer(root, { id }, { models }) {
      return models.Participer.findByPk(id);
    },
    async allParticipers(root, args, { models }) {
      return models.Participer.findAll();
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
    async allValidations(root, args, { models }) {
      return models.Validation.findAll();
    },
  },

  Mutation: {
    singleDownload: async (parent, args) => {
      if (args.file !== "") {
        const path = args.file;
        fs.createWriteStream(path).on("close", callback);
        //const files1 = fs.rmdir(args.file);
        request.head(path, (err, res, body) => {
          request(path).pipe(fs.createWriteStream(path)).on("close", callback);
        });
        return true;
      }
    },
    singleUpload: async (parent, args) => {
      const { createReadStream, filename } = await args.file;
      const file = await args.file;
      await storeUpload({ createReadStream, filename });
      return true;
    },
    login: async (_, args, { models, secret, res }) => {
      const user = await models.IngenieurPedagogique.findOne({
        where: { email_ing: args.email },
      });
      if (!user) throw new Error("could not find user");
      const valid = await compare(args.password, user.password);
      if (!valid) {
        throw new Error("bad password");
      }
      //login seccesful
      sendRefreshToken(res, createRefreshToken(user));
      // Send back tokens in cookies as response
      // cookieParser("token", JSONCookie(createAccessToken(user)));
      // res.cookie("x-token", createAccessToken(user));
      // res.cookie("x-token-refresh", createRefreshToken(user), {
      //   maxAge: 60 * 60 * 24 * 30,
      //   //httpOnly: true,
      // });
      return createAccessToken(user);
      // if (user) return Buffer.from(args.email).toString("base64");
    },
    async logout(_, args, { res }) {
      sendRefreshToken(res, "");
      return true;
    },
    async createClient(root, args, { models }) {
      //looking if you add both cin-p and mat_fisc_sc
      if (args.personne & args.societe)
        throw new ApolloError("can't add both Person and societe");

      //looking after person
      const findperson =
        args.personne &&
        (await models.Personne.findOne({
          where: { cin_p: args.personne },
        }));
      if (findperson) throw new ApolloError("this cin_p is already created");
      //looking after adress
      const findadress =
        args.adr_client &&
        (await models.Client.findOne({
          where: { adr_client: args.adr_client },
        }));
      if (findadress) throw new ApolloError("this adress is already created");
      //looking after telifon
      const findtelefon =
        args.tel_client &&
        (await models.Client.findOne({
          where: { tel_client: args.tel_client },
        }));
      if (findtelefon)
        throw new ApolloError("this telifon number is already created");

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
        args.personne &&
        (await models.Personne.findOne({
          where: { ClientCodeClient: args.code_client },
        }));
      //looking after societe
      const findsociete =
        args.societe &&
        (await models.Societe.findOne({
          where: { ClientCodeClient: args.code_client },
        }));
      //if cin or mart-fisc-sc is changed, then it will be updated
      const a =
        findperson &&
        findperson.cin_p !== args.personne &&
        (await findperson.update(
          { cin_p: args.personne },
          { where: { ClientCodeClient: args.code_client } }
        ));

      findsociete &&
        (findsociete.mat_fisc_sc !== args.societe ||
          findsociete.responsable !== args.responsable) &&
        (await findsociete.update(
          { mat_fisc_sc: args.societe, responsable: args.responsable },
          { where: { ClientCodeClient: args.code_client } }
        ));

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
    async updateDemandeFormation(root, args, { models }) {
      const updateDemandeFormation = await models.DemandeFormation.update(
        {
          date_demande: args.date_demande,
          type_demande: args.type_demande,
          etat_demande: args.etat_demande,
          prix_prevu: args.prix_prevu,
          lieu_prevu: args.lieu_prevu,
          duree_prevu: args.duree_prevu,
          mode_demande: args.mode_demande,
          hr_deb_j_prev: args.hr_deb_j_prev,
          hr_fin_j_prev: args.hr_fin_j_prev,
          hr_j_prev: args.hr_j_prev,
          ClientCodeClient: args.ClientCodeClient,
          FormationCIFormation: args.FormationCIFormation,
          DemandeurCodeDemandeur: args.DemandeurCodeDemandeur,
        },
        { where: { code_demande: args.code_demande } }
      );
      return updateDemandeFormation;
    },
    async deleteDemande(root, args, { models }) {
      const deleteDemande = await models.Demande.destroy({
        where: { code_demande: args.code_demande },
      });
    },
    async createDatePrevue(root, { date_prev }, { models }) {
      return models.DatePrevue.create({
        date_prev,
      });
    },
    async deleteDatePrevue(root, args, { models }) {
      const deleteDatePrevue = await models.DatePrevue.destroy({
        where: { date_prev: args.date_prev },
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
    async createMetier(root, args, { models }) {
      const addMetie = await models.Metiers.create({
        code_metier: args.code_metier,
        intitule_metier: args.intitule_metier,
      });
      const t = addMetie.createFormation();
      const addDonne_lieu = args.FormationCIFormation.map(async (f) => {
        await models.Donne_lieu.create({
          FormationCIFormation: f,
          MetierCodeMetier: args.code_metier,
        });
      });
      return addMetie;
    },
    async updateMetier(root, args, { models }) {
      const updateMetier = await models.Metiers.update(
        {
          code_metier: args.code_metier,
          intitule_metier: args.intitule_metier,
        },
        { where: { code_metier: args.code_metier } }
      );
      return updateMetier;
    },
    async deleteMetier(root, args, { models }) {
      const deletMetier = await models.Metiers.destroy({
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
    async updateFormateur_Formation(root, args, { models }) {
      const updateFormateur_Formation = await models.Formateur_Formation.update(
        {
          validation_f: args.validation_f,
          date_validation: args.date_validation,
          FormationCIFormation: args.FormationCIFormation,
          FormateurCodeFormateur: args.FormateurCodeFormateur,
        },
        {
          where: {
            FormationCIFormation: args.FormationCIFormation,
            FormateurCodeFormateur: args.FormateurCodeFormateur,
          },
        }
      );
      return updateFormateur_Formation;
    },
    async deleteFormateur_Formation(root, args, { models }) {
      const deleteFormateur_Formation = await models.Formateur_Formation.destroy(
        {
          where: {
            FormationCIFormation: args.FormationCIFormation,
            FormateurCodeFormateur: args.FormateurCodeFormateur,
          },
        }
      );
    },
    async createFormateur(root, args, { models }) {
      const cv_f = await args.cv_f;
      const copie_cin = await args.copie_cin;
      const copie_passeport = await args.copie_passeport;
      const copie_RIB = await args.copie_RIB;
      const upload_cv_f = await storeUpload(
        cv_f,
        "cv_f",
        args.code_formateur,
        "formateur"
      );
      const upload_cin = await storeUpload(
        copie_cin,
        "cin",
        args.code_formateur,
        "formateur"
      );
      const upload_passeport = await storeUpload(
        copie_passeport,
        "passeport",
        args.code_formateur,
        "formateur"
      );
      const upload_RIB_f = await storeUpload(
        copie_RIB,
        "RIB_f",
        args.code_formateur,
        "formateur"
      );
      const findCodeFormateur =
        args.code_formateur &&
        (await models.Formateur.findOne({
          where: { code_formateur: args.code_formateur },
        }));
      if (findCodeFormateur)
        throw new ApolloError("this Code Formateur is already created");
      const addFormateur = await models.Formateur.create({
        code_formateur: args.code_formateur,
        nom_f: args.nom_f,
        prenom_f: args.prenom_f,
        classe_f: args.classe_f,
        fonction_f: args.fonction_f,
        cv_f: `${__dirname}/upload/${args.code_formateur}/formateur/cv_f/${cv_f.filename}`,
        email_f: args.email_f,
        tel_f: args.tel_f,
        NSS: args.NSS,
        salaire_f: args.salaire_f,
        adr_f: args.adr_f,
        date_dajout: args.date_dajout,
        cin_f: args.cin_f,
        copie_cin: `${__dirname}/upload/${args.code_formateur}/formateur/cin/${copie_cin.filename}`,
        passeport_f: args.passeport_f,
        copie_passeport: `${__dirname}/upload/${args.code_formateur}/formateur/passeport/${copie_passeport.filename}`,
        visa_f: args.visa_f,
        val_visa: args.val_visa,
        tarif_f: args.tarif_f,
        RIB_f: args.RIB_f,
        copie_RIB: `${__dirname}/upload/${args.code_formateur}/formateur/RIB_f/${copie_RIB.filename}`,
      });
      const addFormateurFormation = args.formationCIFormation.map(
        async (f) =>
          await models.Formateur_Formation.create({
            FormationCIFormation: f,
            FormateurCodeFormateur: args.code_formateur,
            date_validation: "",
            validation_f: 0,
          })
      );
      return addFormateur;
    },
    async updateFormateur(root, args, { models }) {
      const updateFormateur = await models.Formateur.update(
        {
          nom_f: args.nom_f,
          prenom_f: args.prenom_f,
          classe_f: args.classe_f,
          fonction_f: args.fonction_f,
          cv_f: `${__dirname}/upload/${args.code_formateur}/formateur/cv_f/${cv_f.filename}`,
          email_f: args.email_f,
          tel_f: args.tel_f,
          NSS: args.NSS,
          salaire_f: args.salaire_f,
          adr_f: args.adr_f,
          date_dajout: args.date_dajout,
          cin_f: args.cin_f,
          copie_cin: `${__dirname}/upload/${args.code_formateur}/formateur/cin/${copie_cin.filename}`,
          passeport_f: args.passeport_f,
          copie_passeport: `${__dirname}/upload/${args.code_formateur}/formateur/passeport/${copie_passeport.filename}`,
          visa_f: args.visa_f,
          val_visa: args.val_visa,
          tarif_f: args.tarif_f,
          RIB_f: args.RIB_f,
          copie_RIB: `${__dirname}/upload/${args.code_formateur}/formateur/RIB_f/${copie_RIB.filename}`,
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
        password,
        role,
      },
      { models }
    ) {
      const hashedPassword = await hash(password, 12);
      const addIP = await models.IngenieurPedagogique.create({
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
        password: hashedPassword,
        role,
      });
      return addIP;
    },
    updateIngenieurPedagogique: combineResolvers(
      //      isAdmin,
      async (parent, args, { models, me }) => {
        const hashedPassword = await hash(args.password, 12);

        const updateIngenieurPedagogique = await models.IngenieurPedagogique.update(
          {
            nom_ing: args.nom_ing,
            prenom_ing: args.prenom_ing,
            cv_ing: args.cv_ing,
            email_ing: args.email_ing,
            tel_ing: args.tel_ing,
            NSS_ing: args.NSS_ing,
            salaire_ing: args.salaire_ing,
            specialite_ing: args.specialite_ing,
            adr_ing: args.adr_ing,
            password: hashedPassword,
            role: args.role,
          },
          { where: { code_IP: args.code_IP } }
        );
        return updateIngenieurPedagogique;
      }
    ),

    async deleteIngenieurPedagogique(root, args, { models }) {
      const deleteIngenieurPedagogique = await models.IngenieurPedagogique.destroy(
        {
          where: { code_IP: args.code_IP },
        }
      );
      return deleteIngenieurPedagogique;
    },
    async createParticipant(
      root,
      { nom_participant, prenom_participant, carte_identite, ClientCodeClient },
      { models }
    ) {
      return models.Participant.create({
        nom_participant,
        prenom_participant,
        carte_identite,
        ClientCodeClient,
      });
    },
    async updateParticipant(root, args, { models }) {
      const updateParticipant = await models.Participant.update(
        {
          nom_participant: args.nom_participant,
          prenom_participant: args.prenom_participant,
          carte_identite: args.carte_identite,
        },
        { where: { code_participant: args.code_participant } }
      );
      return updateParticipant;
    },
    async deleteParticipant(root, args, { models }) {
      const deleteParticipant = await models.Participant.destroy({
        where: { code_participant: args.code_participant },
      });
      return this.deleteParticipant;
    },
    async createMotCle(root, { motcle }, { models }) {
      return models.MotCle.create({
        motcle,
      });
    },
    async deleteMotCle(root, args, { models }) {
      const deleteMotCle = await models.MotCle.destroy({
        where: { motcle: args.motcle },
      });
      return this.deleteMotCle;
    },
    async createParticiper(root, args, { models }) {
      const rapport_eval = await args.rapport_eval;
      const upload_rapport_eval = await storeUpload(
        rapport_eval,
        "rapport_eval",
        args.ParticipantCodeParticipant,
        "participert"
      );
      const createParticiper = await models.Participer.create({
        rapport_eval: `${__dirname}/upload/${args.ParticipantCodeParticipant}/participert/rapport_eval/${rapport_eval.filename}`,
        note_QCM: args.note_QCM,
        date_eval: args.date_eval,
        ParticipantCodeParticipant: args.ParticipantCodeParticipant,
        SessionCISession: args.SessionCISession,
      });
      return createParticiper;
    },
    async updateParticiper(root, args, { models }) {
      const rapport_eval = await args.rapport_eval;
      const upload_rapport_eval = await storeUpload(
        rapport_eval,
        "rapport_eval",
        args.ParticipantCodeParticipant,
        "participert"
      );
      const updateParticiper = await models.Participer.update(
        {
          rapport_eval: `${__dirname}/upload/${args.ParticipantCodeParticipant}/participert/rapport_eval/${rapport_eval.filename}`,
          note_QCM: args.note_QCM,
          date_eval: args.date_eval,
          ParticipantCodeParticipant: args.ParticipantCodeParticipant,
          SessionCISession: args.SessionCISession,
        },
        {
          where: {
            ParticipantCodeParticipant: args.ParticipantCodeParticipant,
            SessionCISession: args.SessionCISession,
          },
        }
      );
      return updateParticiper;
    },
    async deleteParticiper(root, args, { models }) {
      const deleteParticiper = await models.Participer.destroy({
        where: {
          where: {
            ParticipantCodeParticipant: args.ParticipantCodeParticipant,
            SessionCISession: args.SessionCISession,
          },
        },
      });
      return deleteParticiper;
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
      const updateSession = await models.Session.update(
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
          SupportCodeSupport: args.SupportCodeSupport
            ? args.SupportCodeSupport
            : null,
        },
        { where: { code_session: args.code_session } }
      );
      return updateSession[0];
    },
    async deleteSession(root, args, { models }) {
      const deleteSession = await models.Session.destroy({
        where: { CI_session: args.CI_session },
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
      const updateTheme = await models.Theme.update(
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
      return metiers.getFormations();
    },
  },
  Formateur_Formation: {
    async formateur(formateur_formation) {
      return formateur_formation.getFormations();
    },
    async formation(formateur_formation) {
      return formateur_formation.getFormateurs();
    },
  },
  Formateur: {
    async session(formateur) {
      return formateur.getSessions();
    },
    async formation(formateur) {
      return formateur.getFormations();
    },
    async validation(formateur) {
      return formateur.getValidations();
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
      return participant.getSessions();
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
      return session.getParticipants();
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
      return validation.getFormateur();
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
