"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const { hash } = require("bcryptjs");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize("fcit", null, null, {
    dialect: "sqlite",
    storage: "./fcit.sqlite",
  });
}

fs.readdirSync(__dirname)
  .filter((file) => {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach((file) => {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
sequelize.sync().then(async () => {
  const hashedPassword = await hash("test123", 12);
  const ft = await db.IngenieurPedagogique.findOne({
    where: { code_IP: 99 },
  });
  const test = !ft
    ? await db.IngenieurPedagogique.findOrCreate({
        where: {
          code_IP: 99,
          nom_ing: "Test",
          prenom_ing: "Test",
          cv_ing: "qwe",
          email_ing: "test@test.com",
          tel_ing: "22020020",
          NSS_ing: 22,
          salaire_ing: 1111.123,
          specialite_ing: "es6",
          adr_ing: "Tunis Rue 4 ",
          password: hashedPassword,
          role: "Admin",
        },
      })
    : null;
  return test;
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
