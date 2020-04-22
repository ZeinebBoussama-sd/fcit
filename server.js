const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const db = require("./src/connector");
const resolvers = require("./src/resolvers");
const formateur = require("./src/modals/formateur");
const formation = require("./src/modals/formation");
const demandeformation = require("./src/modals/demandeformation");
const session = require("./src/modals/session");
const fichier = require("./src/modals/fichier");
const support = require("./src/modals/support");
const participant = require("./src/modals/participant");
const theme = require("./src/modals/theme");
const IngenieuPedagogique = require("./src/modals/ingenieurpedagogique");
//test connection
db.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
formateur;
formation;
session;
demandeformation;
fichier;
support;
participant;
theme;
IngenieuPedagogique;
theme.hasOne(formation);
db.sync();
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
