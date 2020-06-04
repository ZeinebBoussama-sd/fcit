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
    PersonneId: Int
    SocieteId: Int
    session: [Session]
    demandeformation: [DemandeFormation]
    personne: Personne
    societe: Societe
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
  type DemandeFormation {
    id: ID!
    date_demande: Date
    date_deb_prevue: Date
    type_demande: String
    etat_demande: String
    prix_prevu: Float
    lieu_prevu: String
    duree_prevu: Int
    horaire_prevu: String
    mode_demande: String
    createdAt: Date
    client: Client!
    formation: Formation!
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
  type Filieres_metiers {
    code_intitule_filiere: String!
    intitule_filiere: String!
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
    ThemeId: Int
    demandeformation: [DemandeFormation]
    theme: Theme
    filieres_metiers: [Filieres_metiers]
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
    CI_sessi: ID!
    code_session: String!
    type_sess: String!
    mode_session: String!
    date_deb_sess: Date!
    duree_sess: Int!
    hr_debut_j: String!
    hr_fin_j: String!
    hr_j: String!
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
    decision_R: Boolean!
    decision_F: Boolean!
    remarque: String!
    formateur: Formateur!
    ingenieurpedagogique: IngenieurPedagogique!
    support: Support!
  }
  type Query {
    client(code_client: ID, nom_client: String): Client
    allClients: [Client!]!
    personne(cin_p: Int): Personne
    societe(mat_fisc_sc: String): Societe
    demandeformation(id: ID): DemandeFormation
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
    filieres_metiers(
      code_intitule_filiere: String
      intitule_filiere: String
    ): Filieres_metiers
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
      tel_client: Int!
      adr_client: String!
      personne: Int
      societe: Int
      PersonneId: Int
      SocieteId: Int
    ): Client!

    deleteClient(code_client: String!): DeleteClientMutationResponse

    updateClient(
      code_client: String
      pays_client: String
      nom_client: String
      email_client: String
      tel_client: Int
      adr_client: String
      PersonneId: Int
      SocieteId: Int
    ): Client!

    createPersonne(cin_p: Int!): Personne!

    createSociete(mat_fisc_sc: String!, responsable: String): Societe!

    createDemandeFormation(
      date_demande: Date
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

    createFilieres_metiers(
      code_intitule_filiere: String!
      intitule_filiere: String!
    ): Filieres_metiers!

    createFormateur_Formation(
      validation_f: Boolean!
      date_validation: Date!
      FormationId: Int!
      FormateurId: Int!
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

    createMotCle(motcle: String!): MotCle!

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
      code_session: String
      type_sess: String
      mode_session: String
      date_deb_sess: Date
      duree_sess: Int
      hr_debut_j: String
      hr_fin_j: String
      hr_j: String
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

    createTheme(code_theme: String!, nom_theme: String!): Theme!

    createValidation(
      code_val: Int!
      date_val: Date!
      decision_R: Boolean!
      decision_F: Boolean!
      remarque: String!
      FormateurId: Int
      IngenieurPedagogiqueId: Int
      SupportId: Int
    ): Validation!
  }
`;

module.exports = typeDefs;
