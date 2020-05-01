// const bcrypt = require("bcryptjs");
import { GraphQLScalarType } from "graphql";
import { Kind } from "graphql/language";

const resolverMap = {
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
};
const resolvers = {
  Query: {
    async user(root, { id }, { models }) {
      return models.User.findById(id);
    },
    async allRecipes(root, args, { models }) {
      return models.Recipe.findAll();
    },
    async recipe(root, { id }, { models }) {
      return models.Recipe.findById(id);
    },
  },
  /* Mutation: {
    async createUser(root, { name, email, password }, { models }) {
      return models.User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10),
      });
    },
    async createRecipe(
      root,
      { userId, title, ingredients, direction },
      { models }
    ) {
      return models.Recipe.create({ userId, title, ingredients, direction });
    },
  }, */
  User: {
    async recipes(user) {
      return user.getRecipes();
    },
  },
  Recipe: {
    async user(recipe) {
      return recipe.getUser();
    },
  },
};

module.exports = resolvers;
