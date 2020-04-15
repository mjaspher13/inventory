const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  appUrl: process.env.APP_URL,
  appEnv: process.env.APP_ENV,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbName: process.env.DB_DATABASE,
  dbUser: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  development: {
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: "mysql",
    operatorsAliases: "false",
  },
  test: {
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: "mysql",
    operatorsAliases: "false",
  },
  production: {
    host: process.env.DB_HOSTNAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    dialect: "mysql",
    operatorsAliases: "false",
  },
};
