require("dotenv").config();
const { AuthenticationError, ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const models = require("../models");
const { verify } = require("jsonwebtoken");
//const IsEmail = require("isemail");

const getMe = async (req) => {
  const authorization = req.headers["authorization"];

  if (!authorization) {
    return null;
  }

  try {
    const token = authorization.split(" ")[1];
    const payload = verify(token, process.env.REFRESH_TOKEN_SECRET);
    return models.IngenieurPedagogique.findOne({
      where: { code_IP: payload.code_IP },
    });
  } catch (err) {
    console.log(err);
    return null;
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req, connection, res }) => {
    // simple auth check on every request
    if (req.body.operationName !== "login") {
      const me = await getMe(req);
      //const auth = (req.headers && req.headers.authorization) || "";
      //const email = Buffer.from(auth, "base64").toString("ascii");
      // if (!IsEmail.validate(email)) {
      //   return { k: null };
      // }
      // find a user by their email
      // const user = await models.IngenieurPedagogique.findOne({
      //   where: { email_ing: email },
      // });
      if (!me) throw new AuthenticationError("you must be logged in");
      return { me, models, res };
    }
    return { models, res };
  },
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
