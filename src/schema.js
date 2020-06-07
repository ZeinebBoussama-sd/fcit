const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

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
    client: Client!
    formation: Formation!
    demandeur: Demandeur!
    dateprevue: [DatePrevue]
    ClientCodeClient: String
    DemandeurCodeDemandeur: Int
    FormationCIFormation: Int
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
    support: Support!
  }
  type Metier {
    code_metier: String!
    intitule_metier: String!
    formation: [Formation]
  }
  type Formateur_Formation {
    validation_f: Boolean!
    date_validation: Date!
    formation: Formation!
    formateur: Formateur!
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
    passeport_f: Int
    copie_passeport: String
    visa_f: String
    val_visa: Date
    tarif_f: Float
    RIB_f: Int
    copie_RIB: String
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
    tel_ing: String!
    NSS_ing: Int!
    salaire_ing: Float!
    specialite_ing: String!
    adr_ing: String!
    validation: [Validation]!
  }
  type MotCle {
    motcle: String!
    formation: [Formation]
  }
  type Participant {
    code_participant: ID!
    nom_partcipant: String
    prenom_partcipant: String
    carte_identite: Int!
    client: Client
    session: [Session]!
  }
  type Participer {
    rapport_eval: String!
    note_QCM: Float!
    date_eval: Date!
    session: Session!
    participant: Participant!
  }
  type Session {
    CI_sessi: ID!
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
    formation: Formation!
    support: Support!
    client: Client!
    participant: [Participant]!
    formateur: Formateur
  }
  type Support {
    code_support: ID!
    titre_support: String!
    date_support: Date!
    session: [Session]
    validation: [Validation]!
    fichier: [Fichier]!
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
    formateur: Formateur!
    ingenieurpedagogique: IngenieurPedagogique!
    support: Support!
  }
  type Query {
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
    motcle(motcle: String): MotCle
    ingenieurpedagogique(code_IP: ID, nom_ing: String): IngenieurPedagogique
    allIngenieurPedagogiques: [IngenieurPedagogique!]!
    participant(code_participant: ID, carte_identite: Int): Participant
    validation(code_val: ID): Validation
    metier(code_metier: String, intitule_metier: String): Metier
    formateur_formation(id: ID): Formateur_Formation
    participer(id: ID): Participer
  }
  interface MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }
  type DeleteClientMutationResponse implements MutationResponse {
    code: String!
    success: Boolean!
    message: String!
  }
  type Mutation {
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
      tel_client: Int
      adr_client: String
    ): Client!

    createPersonne(cin_p: Int!, ClientCodeClient: String): Personne!

    createSociete(
      mat_fisc_sc: String!
      responsable: String!
      ClientCodeClient: String
    ): Societe!
    createDatePrevue(date_prev: Date!): DatePrevue!
    createDemandeFormation(
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

    createDemandeur(
      nom_demandeur: String!
      prenom_demandeur: String!
      email_demandeur: String!
      tel_demandeur: String!
    ): Demandeur!

    createFichier(
      nom_fichier: String!
      type_fichier: String!
      taille_max: Int!
      url_fichier: String!
      nature_support: String!
      SupportCodeSupport: Int
    ): Fichier!

    createMetier(code_metier: String!, intitule_metier: String!): Metier!

    createFormateur_Formation(
      validation_f: Boolean!
      date_validation: Date!
      FormationCIFormation: Int
      FormateurCodeFormateur: String
    ): Formateur_Formation!

    createFormateur(
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
      passeport_f: Int
      copie_passeport: String
      visa_f: String
      val_visa: Date
      tarif_f: Float
      RIB_f: Int
      copie_RIB: String
    ): Formateur!

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

    createIngenieurPedagogique(
      nom_ing: String!
      prenom_ing: String!
      cv_ing: String!
      email_ing: String!
      tel_ing: Int!
      NSS_ing: Int!
      salaire_ing: Float!
      specialite_ing: String!
      adr_ing: String!
    ): IngenieurPedagogique!

    createMotCle(motcle: String!): MotCle!

    createParticipant(
      nom_partcipant: String!
      prenom_partcipant: String!
      carte_identite: Int!
      ClientCodeClient: String
    ): Participant!

    createParticiper(
      rapport_eval: String!
      note_QCM: Float!
      date_eval: Date!
      ParticipantCodeParticipant: Int
      SessionCISession: Int
    ): Participer!

    createSession(
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
    ): Session!

    createSupport(titre_support: String!, date_support: Date!): Support!

    createTheme(code_theme: String!, nom_theme: String!): Theme!

    createValidation(
      code_val: Int!
      date_val: Date!
      decision_R: Boolean!
      decision_F: Boolean!
      remarque: String!
      FormateurCodeFormateur: String
      IngenieurPedagogiqueId: Int
      SupportId: Int
    ): Validation!
  }
`;

module.exports = typeDefs;
