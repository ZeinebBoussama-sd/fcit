const { ApolloServer, gql } = require('apollo-server');

const 
const typeDefs = gql`
 
  type Client{
    idClient: ID!
    nomClient: String
    emailClient:  String!
    telClient:Int
    AdrClient: String
  }

  type Personne {
    cinP: Int!
    client: Client
  }
  type Societé {
    MatfiscaleSocieté: Int!
    client: Client
  }

  type DemandeFormation {
      idFormation:ID!
      dateDemande: Date
      datebecprev: Date 
      typeDemande: String
      EtatDemande: String
      honorairePrevu : Int
      lieuPrevu: String
      dureePrevu: Int
      horairePrevu: String
      client: Client
      formation :Formation
  }
  type Session{
      idSession : ID!
      typeSess: String
      dateDebSess: Date
      dureeSess : Int
      horaireSess : Double
      fraisSejour: Float
      fraisTransport: Float
      fraisAutres: Float 
      client: Client
      support: Support
      formateur: Formateur 
      participant:Participant
      formation:Formation
  }
type Formation{
    refFormation: String
    intituleFormation: String
    duréeFormation: Int
    honoraireFormation: Int
    nbreMinPart: Int
    nbreMaxPart: Int
    theme: Theme
    motclé: MotClé
    formateur: Formateur
    demandeformation: DemandeFormation
}
type Formateur{
    idFormateur : ID!
    nomF : String
    prenomF : String
    cvF: String
    email :String
    telF: Int
    NSSF :Int
    salaire: Float
    specialitéF: String
    AdrF: String
    dateAjout: Date
    formation: Formation
    session: [Session]
    motclé: [MotClé]
    support: [Support] 
}
type  MotClé {
    idMotClé: ID!
    formation: Formation
    formateur: Formateur
}
type Support {
    idSupport: ID!
    nomSupport : String
    typeSupport: String
    formateur: Formateur
    ingenieurpedagogique: IngenieurPedagogique
    fichier: [Fichier]
}
type Fichier{
    idFichier: ID!
    nomfichier: String
    typefichier: String
    taillemax: Int
    urlfichier: String
}



  type Query {
    books: [Book]
    authors: [Author]
  }
`;
const resolvers = {
  Query: {
    books: () => books
  }
};
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});