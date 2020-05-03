const { gql } = require("apollo-server");

const typeDefs = gql`
  scalar Date

  type Client {
    id: ID!
    nom_client: String!
    email_client: String!
    tel_client: Int!
    Adr_client: String
    Session: [Session]
    DemandeFormation: [DemandeFormation]
    personne: Personne
    societe: Societe
  }
  type Personne {
    id: ID!
    cin_p: Int!
    client: Client
  }
  type Societe {
    id: ID!
    mat_fisc_sc: Int!
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
    Client: Client!
    Formation: Formation!
  }
  type Fichier {
    id: ID!
    nom_fichier: String
    type_fichier: String
    taille_max: Int
    url_fichier: String!
    nature_support: String
    Support: Support!
  }
  type Filieres_metiers {
    id: ID!
    intitule_filiere: String!
    Formation: [Formation]
  }
  type Formateur_Formation {
    validation_f: Boolean
    date_validation: Date
    Formation: Formation!
    Formateur: Formateur!
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
    Formation: [Formation]
    Session: [Session]
    Validation: [Validation]
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
    Participant: String
    prerequis: String
    DemandeFormation: [DemandeFormation]
    Theme: Theme
    Filieres_metiers: [Filieres_metiers]
    MotCle: [MotCle]
    Formateur: [Formateur]
    Session: [Session]
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
    Validation: [Validation]!
  }
  type MotCle {
    id: ID!
    Formation: [Formation]
  }
  type Participant {
    id: ID!
    nom_partcipant: String
    prenom_partcipant: String
    carte_identite: Int!
    Session: [Session]!
  }
  type Participer {
    rapport_eval: String
    note_QCM: Float
    date_eval: Date
    Session: Session!
    Participant: Participant!
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
    Formation: Formation!

    Support: Support!
    Client: Client!
    Participant: [Participant]!
    Formateur: Formateur
  }
  type Support {
    id: ID!
    titre_support: String
    date_support: Date
    Session: [Session]
    Validation: [Validation]!
    Fichier: [Fichier]!
  }
  type Theme {
    id: ID!
    nom_theme: String
    Formation: [Formation]
  }
  type Validation {
    date_val: Date
    decision: String
    remarque: String
    Formateur: Formateur!
    IngenieurPedagogique: IngenieurPedagogique!
    Support: Support!
  }
  type Query {
    client(id: ID!): Client
    allClient: [Client!]!
    personne(id: ID!): Personne
    societe(id: ID!): Societe
    demandeformation(id: ID!): DemandeFormation
    theme(id: ID!): Theme
    formation(id: ID!): Formation
    session(id: ID!): Session
    formateur(id: ID!): Formateur
    support(id: ID!): Support
    fichier(id: ID!): Fichier
    motcle(id: ID!): MotCle
    ingenieurpedagogique(id: ID!): IngenieurPedagogique
    participant(id: ID!): Participant
    validation(id: ID!): Validation
    filieres_metiers(id: ID!): Filieres_metiers
    formateur_formation(id: ID!): Formateur_Formation
    participer(id: ID!): Participer
  }

  type Mutation {
    createClient(
      id: ID!
      nom_client: String!
      email_client: String!
      tel_client: Int!
      Adr_client: String
    ): Client!
    createPersonne(id: ID!, cin_p: Int!): Personne!
  }
`;

module.exports = typeDefs;
/*  createClient(
      nom_client: String!
      email_client: String!
      tel_client: Int!
      Adr_client: String
    ): Client! */
//  type Query {
//     user(id: Int!): User
//     allRecipes: [Recipe!]!
//     recipe(id: Int!): Recipe
//   }

//   type Mutation {
//     createUser(name: String!, email: String!, password: String!): User!
//     createRecipe(
//       userId: Int!
//       title: String!
//       ingredients: String!
//       direction: String!
//     ): Recipe!
//   }
