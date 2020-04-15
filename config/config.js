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
};
