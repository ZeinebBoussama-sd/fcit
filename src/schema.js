const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Client {
    id: ID!
    nom_client: String!
    email_client: String!
    tel_client: Int!
    Adr_client: String
    PersonneId: Int
    SocieteId: Int
    session: [Session]
    demandeformation: [DemandeFormation]
    personne: Personne
    societe: Societe
  }
  type Personne {
    id: ID!
    cin_p: Int
    client: Client!
  }
  type Societe {
    id: ID!
    mat_fisc_sc: Int
    client: Client!
  }
  type DemandeFormation {
    id: ID!
    date_demande: Date!
    date_deb_prevue: Date
    type_demande: String
    etat_demande: String
    prix_prevu: Float
    lieu_prevu: String
    duree_prevu: Int
    horaire_prevu: String
    mode_demande: String
    client: Client!
    formation: Formation!
  }
  type Fichier {
    id: ID!
    nom_fichier: String
    type_fichier: String
    taille_max: Int
    url_fichier: String!
    nature_support: String
    support: Support!
  }
  type Filieres_metiers {
    id: ID!
    intitule_filiere: String!
    formation: [Formation]
  }
  type Formateur_Formation {
    validation_f: Boolean
    date_validation: Date
    formation: Formation!
    formateur: Formateur!
  }

  type Formateur {
    id: ID!
    nom_f: String!
    prenom_f: String!
    classe_f: String
    fonction_f: String
    cv_f: String
    email_f: String!
    tel_f: Int
    NSS: Int
    salaire_f: Float
    specialite_f: String
    adr_f: String
    date_dajout: Date
    formation: [Formation]
    session: [Session]
    validation: [Validation]
  }
  type Formation {
    id: ID!
    intitule: String!
    duree_formation: Int
    horaire_formation: Int
    nbre_min_part: Int
    nbre_max_part: Int
    description_formation: String
    catagorie_formation: String
    prix_formation: String
    participant: String
    prerequis: String
    ThemeId: Int
    demandeformation: [DemandeFormation]
    theme: Theme
    filieres_metiers: [Filieres_metiers]
    motcle: [MotCle]
    formateur: [Formateur]
    session: [Session]
  }
  type IngenieurPedagogique {
    id: ID!
    nom_ing: String!
    prenom_ing: String!
    cv_ing: String
    email_ing: String
    tel_ing: Int
    NSS_ing: Int
    salaire_ing: Float
    specialite_ing: String
    adr_ing: String
    validation: [Validation]!
  }
  type MotCle {
    id: ID!
    formation: [Formation]
  }
  type Participant {
    id: ID!
    nom_partcipant: String
    prenom_partcipant: String
    carte_identite: Int!
    session: [Session]!
  }
  type Participer {
    rapport_eval: String
    note_QCM: Float
    date_eval: Date
    session: Session!
    participant: Participant!
  }
  type Session {
    id: ID!
    type_sess: String
    mode_session: String
    date_deb_sess: Date
    duree_sess: Int
    horaire_sess: String
    lieu_sess: String
    prix_session: Float
    honoraire_sess: Float
    frais_sejour: Float
    frais_transport: Float
    perdiem: Float
    autres_frais: Float
    note_eval_formateur: Int
    formation: Formation!
    support: Support!
    client: Client!
    participant: [Participant]!
    formateur: Formateur
  }
  type Support {
    id: ID!
    titre_support: String
    date_support: Date
    session: [Session]
    validation: [Validation]!
    fichier: [Fichier]!
  }
  type Theme {
    id: ID!
    nom_theme: String
    formation: [Formation]
  }
  type Validation {
    date_val: Date
    decision: String
    remarque: String
    formateur: Formateur!
    ingenieurpedagogique: IngenieurPedagogique!
    support: Support!
  }
  type Query {
    client(id: ID, nom_client: String): Client
    allClients: [Client!]!
    personne(id: ID, cin_p: Int): Personne
    societe(id: ID, mat_fisc_sc: Int): Societe
    demandeformation(id: ID): DemandeFormation
    theme(id: ID, nom_theme: String): Theme
    allThemes: [Theme!]!
    formation(id: ID, intitule: String): Formation
    allFormations: [Formation!]!
    session(id: ID): Session
    formateur(id: ID, nom_f: String): Formateur
    support(id: ID, titre_support: String): Support
    fichier(id: ID, nom_fichier: String): Fichier
    motcle(id: ID): MotCle
    ingenieurpedagogique(id: ID, nom_ing: String): IngenieurPedagogique
    allIngenieurPedagogiques: [IngenieurPedagogique!]!
    participant(id: ID, cin_p: Int): Participant
    validation(id: ID): Validation
    filieres_metiers(id: ID, intitule_filiere: String): Filieres_metiers
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
      nom_client: String!
      email_client: String!
      tel_client: Int!
      Adr_client: String
      personne: Int
      societe: Int
      PersonneId: Int
      SocieteId: Int
    ): Client!

    deleteClient(id: ID!): DeleteClientMutationResponse

    updateClient(
      id: ID
      nom_client: String
      email_client: String
      tel_client: Int
      Adr_client: String
      PersonneId: Int
      SocieteId: Int
    ): Client!

    createPersonne(cin_p: Int!): Personne!

    createSociete(mat_fisc_sc: Int!): Societe!

    createDemandeFormation(
      date_demande: Date!
      date_deb_prevue: Date
      type_demande: String
      etat_demande: String
      prix_prevu: Float
      lieu_prevu: String
      duree_prevu: Int
      horaire_prevu: String
      mode_demande: String
      ClientId: Int!
      FormationId: Int!
    ): DemandeFormation!

    createFichier(
      nom_fichier: String
      type_fichier: String
      taille_max: Int
      url_fichier: String!
      nature_support: String
      SupportId: Int!
    ): Fichier!

    createFilieres_metiers(intitule_filiere: String!): Filieres_metiers!

    createFormateur_Formation(
      validation_f: Boolean
      date_validation: Date
      FormationId: Int!
      FormateurId: Int!
    ): Formateur_Formation!

    createFormateur(
      nom_f: String!
      prenom_f: String!
      classe_f: String
      fonction_f: String
      cv_f: String
      email_f: String!
      tel_f: Int
      NSS: Int
      salaire_f: Float
      specialite_f: String
      adr_f: String
      date_dajout: Date
    ): Formateur!

    createFormation(
      intitule: String!
      duree_formation: Int
      horaire_formation: Int
      nbre_min_part: Int
      nbre_max_part: Int
      description_formation: String
      catagorie_formation: String
      prix_formation: String
      Participant: String
      prerequis: String
      ThemeId: Int
    ): Formation!

    createIngenieurPedagogique(
      nom_ing: String!
      prenom_ing: String!
      cv_ing: String
      email_ing: String
      tel_ing: Int
      NSS_ing: Int
      salaire_ing: Float
      specialite_ing: String
      adr_ing: String
    ): IngenieurPedagogique

    createMotCle(id: ID): MotCle!

    createParticipant(
      nom_partcipant: String
      prenom_partcipant: String
      carte_identite: Int!
    ): Participant!

    createParticiper(
      rapport_eval: String
      note_QCM: Float
      date_eval: Date
      ParticipantId: Int!
      SessionId: Int!
    ): Participer!

    createSession(
      type_sess: String
      mode_session: String
      date_deb_sess: Date
      duree_sess: Int
      horaire_sess: String
      lieu_sess: String
      prix_session: Float
      honoraire_sess: Float
      frais_sejour: Float
      frais_transport: Float
      perdiem: Float
      autres_frais: Float
      note_eval_formateur: Int
      ClientId: Int
      FormationId: Int
      FormateurId: Int
      SupportId: Int
    ): Session!

    createSupport(titre_support: String, date_support: Date): Support!

    createTheme(nom_theme: String!): Theme!

    createValidation(
      date_val: Date
      decision: String
      remarque: String
      FormateurId: Int
      IngenieurPedagogiqueId: Int
      SupportId: Int
    ): Validation!
  }
`;

module.exports = typeDefs;
