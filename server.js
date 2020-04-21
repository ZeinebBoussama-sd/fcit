const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const db = require('./src/connector');
const resolvers = require('./src/resolvers');
const user = require('./src/modals/Users');
//test connection
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });
user;
db.sync();
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
