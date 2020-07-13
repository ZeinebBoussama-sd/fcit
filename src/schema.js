const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type File {
    filename: String
    mimetype: String
    encoding: String
  }
  type Client {
    code_client: ID!
    pays_client: String!
    nom_client: String!
    email_client: String!
    tel_client: String!
    adr_client: String!
    session: [Session]
    demandeformation: [DemandeFormation]
    personne: Personne
    societe: Societe
    participant: Participant
  }
  type Personne {
    cin_p: Int!
    client: Client!
  }
  type Societe {
    mat_fisc_sc: String!
    responsable: String!
    client: Client!
  }
  type DatePrevue {
    date_prev: Date!
    demandeformation: [DemandeFormation]
  }
  type DemandeFormation {
    code_demande: ID!
    date_demande: Date!
    type_demande: String!
    etat_demande: String!
    prix_prevu: Float!
    lieu_prevu: String!
    duree_prevu: Int!
    mode_demande: String!
    hr_deb_j_prev: String!
    hr_fin_j_prev: String!
    hr_j_prev: Int!
    client: Client
    formation: Formation
    demandeur: Demandeur
    dateprevue: [DatePrevue]
    ClientCodeClient: String
    DemandeurCodeDemandeur: Int!
    FormationCIFormation: Int!
  }
  type Demandeur {
    code_demandeur: ID!
    nom_demandeur: String!
    prenom_demandeur: String!
    email_demandeur: String!
    tel_demandeur: String!
    demandeformation: [DemandeFormation]
  }
  type Fichier {
    code_fichier: ID!
    nom_fichier: String!
    type_fichier: String!
    taille_max: Int!
    url_fichier: String!
    nature_support: String!
    support: Support
  }
  type Metier {
    code_metier: Int!
    intitule_metier: String!
    formation: [Formation]
  }
  type Formateur_Formation {
    validation_f: Boolean!
    date_validation: Date!
    FormateurCodeFormateur: String
    FormationCIFormation: Int
    formation: Formation
    formateur: Formateur
  }

  type Formateur {
    code_formateur: String!
    nom_f: String!
    prenom_f: String!
    classe_f: String!
    fonction_f: String!
    cv_f: String!
    email_f: String!
    tel_f: String!
    NSS: Int
    salaire_f: Float
    adr_f: String!
    date_dajout: Date
    cin_f: Int
    copie_cin: String
    passeport_f: String
    copie_passeport: String
    visa_f: String
    val_visa: Date
    tarif_f: Float
    RIB_f: String
    copie_RIB: String
    formateur_formation: [Formateur_Formation]
    formation: [Formation]
    session: [Session]
    validation: [Validation]
  }
  type Formation {
    CI_formation: ID!
    code_formation: String!
    intitule: String!
    duree_formation: Int!
    nbre_min_part: Int!
    description_formation: String!
    catagorie_formation: String!
    prix_formation: Float!
    participant: String!
    prerequis: String!
    ThemeCodeTheme: String
    demandeformation: [DemandeFormation]
    theme: Theme
    metiers: [Metier]
    motcle: [MotCle]
    formateur: [Formateur]
    session: [Session]
  }
  type IngenieurPedagogique {
    code_IP: ID!
    nom_ing: String!
    prenom_ing: String!
    cv_ing: String!
    email_ing: String!
    password: String
    role: String
    tel_ing: String!
    NSS_ing: Int!
    salaire_ing: Float!
    specialite_ing: String!
    adr_ing: String!
    validation: [Validation]
  }
  type MotCle {
    motcle: String!
    formation: [Formation]
  }
  type Participant {
    code_participant: ID!
    nom_participant: String
    prenom_participant: String
    carte_identite: Int!
    client: Client
    session: [Session]
  }
  type Participer {
    rapport_eval: String!
    note_QCM: Float!
    date_eval: Date!
    session: Session
    participant: Participant
  }
  type Session {
    CI_session: ID!
    code_session: String!
    type_sess: String!
    mode_session: String!
    date_deb_sess: Date!
    duree_sess: Int!
    hr_deb_j: String!
    hr_fin_j: String!
    hr_j_session: String!
    lieu_sess: String!
    prix_session: Float
    honoraire_sess: Float
    frais_sejour: Float
    frais_transport: Float
    perdiem: Float
    autres_frais: Float
    note_eval_formateur: Int
    ClientCodeClient: String
    FormationCIFormation: Int
    FormateurCodeFormateur: String
    SupportCodeSupport: Int
    formation: Formation
    support: Support
    client: Client
    participant: [Participant]!
    formateur: Formateur
  }
  type Support {
    code_support: ID!
    titre_support: String!
    date_support: Date!
    session: [Session]
    validation: [Validation]
    fichier: [Fichier]
  }
  type Theme {
    code_theme: String!
    nom_theme: String!
    formation: [Formation]
  }
  type Validation {
    code_val: Int!
    date_val: Date!
    decision_r: Boolean!
    decision_f: Boolean!
    remarque: String!
    formateur: Formateur
    ingenieurpedagogique: IngenieurPedagogique
    FormateurCodeFormateur: String
    IngenieurPedagogiqueCodeIP: Int
    SupportCodeSupport: Int
    support: Support
  }
  type Query {
    uploads: [File]
    me: IngenieurPedagogique
    client(code_client: ID, nom_client: String): Client
    allClients: [Client!]!
    demandeur(code_demandeur: ID, nom_demandeur: String): Demandeur
    allDemandeurs: [Demandeur!]!
    personne(cin_p: Int): Personne
    dateprevue(date_prev: Date): DatePrevue
    allDatePrevues: [DatePrevue!]!
    societe(mat_fisc_sc: String): Societe
    demandeformation(code_demande: ID): DemandeFormation
    allDemandeFormations: [DemandeFormation!]!
    theme(code_theme: String, nom_theme: String): Theme
    allThemes: [Theme!]!
    formation(CI_formation: ID, intitule: String): Formation
    allFormations: [Formation!]!
    session(CI_session: ID): Session
    allSessions: [Session!]!
    formateur(code_formateur: String, nom_f: String): Formateur
    allFormateurs: [Formateur!]!
    support(code_support: ID, titre_support: String): Support
    allSupports: [Support!]!
    fichier(code_fichier: ID, nom_fichier: String): Fichier
    allFichiers: [Fichier!]!
    motcle(motcle: String): MotCle
    allMotCles: [MotCle!]!
    ingenieurpedagogique(code_IP: ID, nom_ing: String): IngenieurPedagogique
    allIngenieurPedagogiques: [IngenieurPedagogique!]!
    participant(code_participant: ID, carte_identite: Int): Participant
    allParticipants: [Participant!]!
    validation(code_val: ID): Validation
    allValidations: [Validation!]!
    metier(code_metier: Int, intitule_metier: String): Metier
    allMetiers: [Metier!]!
    formateur_formation(
      FormateurCodeFormateur: String
      FormationCIFormation: Int
    ): [Formateur_Formation]
    allFormateurs_Formations: [Formateur_Formation!]!
    participer(id: ID): Participer
    allParticipers: [Participer!]!
  }
  interface MutationResponse {
    code: String
    success: Boolean
    message: String
  }
  type DeleteClientMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    client: Client
  }
  type DeleteFormateurMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    formateur: Formateur
  }
  type DeleteFormationMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    formation: Formation
  }
  type DeleteIngenieurPedagogiqueMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    ingenieurpedagogique: IngenieurPedagogique
  }
  type DeleteThemeMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    theme: Theme
  }

  type DeleteSupportMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    support: Support
  }
  type DeleteDemandeMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    demande: DemandeFormation
  }
  type DeleteDemandeurMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    demandeur: Demandeur
  }
  type DeleteSessionMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    session: Session
  }
  type DeletePartcipantMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    participant: Participant
  }
  type DeleteFichierMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    fichier: Fichier
  }
  type DeleteValidationMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    validation: Validation
  }
  type DeleteMetierMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    metier: Metier
  }
  type DeleteDatePrevueMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
  }
  type DeletePartciperMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    participer: Participer
  }
  type DeleteMotCleMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    motcle: MotCle
  }
  type DeleteFormateur_FormationMutationResponse implements MutationResponse {
    code: String
    success: Boolean
    message: String
    formateur_formation: Formateur_Formation
  }
  type Mutation {
    singleDownload(file: String!): File!
    singleUpload(file: Upload!): File!
    login(email: String, password: String): String # login token
    logout(code_IP: Int): String
    createClient(
      code_client: String!
      pays_client: String!
      nom_client: String!
      email_client: String!
      tel_client: String!
      adr_client: String!
      personne: Int
      societe: String
      responsable: String
    ): Client!

    deleteClient(code_client: String!): DeleteClientMutationResponse

    updateClient(
      code_client: String
      pays_client: String
      nom_client: String
      email_client: String
      tel_client: String
      adr_client: String
      personne: Int
      societe: String
      responsable: String
    ): DeleteClientMutationResponse!

    createPersonne(cin_p: Int!, ClientCodeClient: String): Personne!

    createSociete(
      mat_fisc_sc: String!
      responsable: String!
      ClientCodeClient: String
    ): Societe!
    createDatePrevue(date_prev: Date!): DatePrevue!
    deleteDatePrevue(date_prev: Date!): DeleteDatePrevueMutationResponse

    createDemandeFormation(
      code_demande: ID
      date_demande: Date!
      type_demande: String!
      etat_demande: String!
      prix_prevu: Float!
      lieu_prevu: String!
      duree_prevu: Int!
      mode_demande: String!
      hr_deb_j_prev: String!
      hr_fin_j_prev: String!
      hr_j_prev: Int!
      ClientCodeClient: String
      FormationCIFormation: Int
      DemandeurCodeDemandeur: Int
    ): DemandeFormation!
    deleteDemande(code_demande: String!): DeleteDemandeMutationResponse

    updateDemandeFormation(
      code_demande: ID
      date_demande: Date!
      type_demande: String!
      etat_demande: String!
      prix_prevu: Float!
      lieu_prevu: String!
      duree_prevu: Int!
      mode_demande: String!
      hr_deb_j_prev: String!
      hr_fin_j_prev: String!
      hr_j_prev: Int!
      ClientCodeClient: String
      FormationCIFormation: Int
      DemandeurCodeDemandeur: Int
    ): DeleteDemandeMutationResponse!

    createDemandeur(
      code_demandeur: Int
      nom_demandeur: String!
      prenom_demandeur: String!
      email_demandeur: String!
      tel_demandeur: String!
    ): Demandeur!

    updateDemandeur(
      code_demandeur: Int
      nom_demandeur: String!
      prenom_demandeur: String!
      email_demandeur: String!
      tel_demandeur: String!
    ): DeleteDemandeurMutationResponse

    deleteDemandeur(code_demandeur: Int!): DeleteDemandeurMutationResponse

    createFichier(
      nom_fichier: String!
      type_fichier: String!
      taille_max: Int!
      url_fichier: String!
      nature_support: String!
      SupportCodeSupport: Int
    ): Fichier!
    updateFichier(
      code_fichier: Int
      nom_fichier: String!
      type_fichier: String!
      taille_max: Int!
      url_fichier: String!
      nature_support: String!
      SupportCodeSupport: Int
    ): DeleteFichierMutationResponse
    deleteFichier(code_fichier: Int!): DeleteFichierMutationResponse

    createMetier(
      code_metier: Int!
      intitule_metier: String!
      FormationCIFormation: [Int]
    ): Metier!
    updateMetier(
      code_metier: Int
      intitule_metier: String
      FormationCIFormation: [Int]
    ): DeleteMetierMutationResponse
    deleteMetier(code_metier: Int!): DeleteMetierMutationResponse

    createFormateur_Formation(
      validation_f: Boolean!
      date_validation: Date!
      FormationCIFormation: Int
      FormateurCodeFormateur: String
    ): Formateur_Formation!
    updateFormateur_Formation(
      validation_f: Boolean!
      date_validation: Date!
      FormationCIFormation: Int
      FormateurCodeFormateur: String
    ): DeleteFormateur_FormationMutationResponse
    deleteFormateur_Formation(
      FormationCIFormation: Int
      FormateurCodeFormateur: String
    ): DeleteFormateur_FormationMutationResponse
    createFormateur(
      code_formateur: String!
      nom_f: String!
      prenom_f: String!
      classe_f: String!
      fonction_f: String!
      cv_f: Upload
      email_f: String!
      tel_f: String!
      NSS: Int
      salaire_f: Float
      adr_f: String!
      date_dajout: Date
      cin_f: Int
      copie_cin: Upload
      passeport_f: String
      copie_passeport: Upload
      visa_f: String
      val_visa: Date
      tarif_f: Float
      RIB_f: String
      copie_RIB: Upload
      formationCIFormation: [Int]
    ): Formateur!

    deleteFormateur(code_formateur: String!): DeleteFormateurMutationResponse

    updateFormateur(
      code_formateur: String!
      nom_f: String!
      prenom_f: String!
      classe_f: String!
      fonction_f: String!
      cv_f: String!
      email_f: String!
      tel_f: String!
      NSS: Int
      salaire_f: Float
      adr_f: String!
      date_dajout: Date
      cin_f: Int
      copie_cin: String
      passeport_f: String
      copie_passeport: String
      visa_f: String
      val_visa: Date
      tarif_f: Float
      RIB_f: String
      copie_RIB: String
      formationCIFormation: [Int]
    ): DeleteFormateurMutationResponse!

    createFormation(
      code_formation: String!
      intitule: String!
      duree_formation: Int!
      nbre_min_part: Int!
      description_formation: String!
      catagorie_formation: String!
      prix_formation: Float
      participant: String!
      prerequis: String!
      ThemeCodeTheme: String
    ): Formation!

    updateFormation(
      CI_formation: ID
      code_formation: String!
      intitule: String!
      duree_formation: Int!
      nbre_min_part: Int!
      description_formation: String!
      catagorie_formation: String!
      prix_formation: Float
      participant: String!
      prerequis: String!
      ThemeCodeTheme: String
    ): DeleteFormationMutationResponse!

    deleteFormation(CI_formation: Int!): DeleteFormationMutationResponse

    createIngenieurPedagogique(
      code_IP: Int
      nom_ing: String!
      prenom_ing: String!
      cv_ing: String!
      email_ing: String!
      tel_ing: String!
      NSS_ing: Int!
      salaire_ing: Float!
      specialite_ing: String!
      adr_ing: String!
      password: String
      role: String
    ): IngenieurPedagogique!

    updateIngenieurPedagogique(
      code_IP: Int
      nom_ing: String!
      prenom_ing: String!
      cv_ing: String!
      email_ing: String!
      tel_ing: String!
      NSS_ing: Int!
      role: String
      password: String
      salaire_ing: Float!
      specialite_ing: String!
      adr_ing: String!
    ): DeleteIngenieurPedagogiqueMutationResponse

    deleteIngenieurPedagogique(
      code_IP: Int!
    ): DeleteIngenieurPedagogiqueMutationResponse
    createMotCle(motcle: String!): MotCle!
    deleteMotCle(motcle: String): DeleteMotCleMutationResponse
    createParticipant(
      nom_participant: String!
      prenom_participant: String!
      carte_identite: Int!
      ClientCodeClient: String
    ): Participant!
    updateParticipant(
      code_participant: Int
      nom_participant: String!
      prenom_participant: String!
      carte_identite: Int!
      ClientCodeClient: String
    ): DeletePartcipantMutationResponse
    deleteParticipant(code_participant: Int!): DeletePartcipantMutationResponse
    createParticiper(
      rapport_eval: Upload!
      note_QCM: Float!
      date_eval: Date!
      ParticipantCodeParticipant: Int
      SessionCISession: Int
    ): Participer!
    updateParticiper(
      rapport_eval: Upload!
      note_QCM: Float!
      date_eval: Date!
      ParticipantCodeParticipant: Int
      SessionCISession: Int
    ): DeletePartciperMutationResponse
    deleteParticiper(
      ParticipantCodeParticipant: Int
      SessionCISession: Int
    ): DeletePartciperMutationResponse
    createSession(
      code_session: String!
      type_sess: String!
      mode_session: String!
      date_deb_sess: Date!
      duree_sess: Int!
      hr_deb_j: String!
      hr_fin_j: String!
      hr_j_session: Int!
      lieu_sess: String!
      prix_session: Float
      honoraire_sess: Float
      frais_sejour: Float
      frais_transport: Float
      perdiem: Float
      autres_frais: Float
      note_eval_formateur: Int
      ClientCodeClient: String
      FormationCIFormation: Int
      FormateurCodeFormateur: String
      SupportCodeSupport: Int
    ): Session!

    updateSession(
      type_sess: String!
      code_session: String!
      mode_session: String!
      date_deb_sess: Date!
      duree_sess: Int!
      hr_deb_j: String!
      hr_fin_j: String!
      hr_j_session: Int!
      lieu_sess: String!
      prix_session: Float
      honoraire_sess: Float
      frais_sejour: Float
      frais_transport: Float
      perdiem: Float
      autres_frais: Float
      note_eval_formateur: Int
      ClientCodeClient: String
      FormationCIFormation: Int
      FormateurCodeFormateur: String
      SupportCodeSupport: Int
    ): DeleteSessionMutationResponse

    deleteSession(CI_session: Int!): DeleteSessionMutationResponse

    createSupport(titre_support: String!, date_support: Date!): Support!
    deleteSupport(code_support: Int!): DeleteSupportMutationResponse
    updateSupport(
      code_support: Int
      titre_support: String!
      date_support: Date!
    ): DeleteSupportMutationResponse
    createTheme(code_theme: String!, nom_theme: String!): Theme!
    updateTheme(
      code_theme: String!
      nom_theme: String!
    ): DeleteThemeMutationResponse
    deleteTheme(code_theme: String!): DeleteThemeMutationResponse

    createValidation(
      code_val: Int
      date_val: Date!
      decision_r: Boolean!
      decision_f: Boolean!
      remarque: String!
      FormateurCodeFormateur: String
      IngenieurPedagogiqueCodeIP: Int
      SupportCodeSupport: Int
    ): Validation!

    updateValidation(
      code_val: Int
      date_val: Date!
      decision_R: Boolean!
      decision_F: Boolean!
      remarque: String!
      FormateurCodeFormateur: String
      IngenieurPedagogiqueCodeIP: Int
      SupportCodeSupport: Int
    ): DeleteValidationMutationResponse

    deleteValidation(code_val: String!): DeleteValidationMutationResponse
  }
`;

module.exports = typeDefs;
