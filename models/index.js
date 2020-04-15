"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const {
  appEnv,
  dbHost,
  dbName,
  dbUser,
  dbPassword,
} = require("../config/config");
// const config = require(__dirname + "/../config/config.json")[appEnv];
const db = {};

let sequelize;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  username: dbUser,
  password: dbPassword,
  database: dbName,
  host: dbHost,
  dialect: "mysql",
  operatorsAliases: "false",
});
// }

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

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
