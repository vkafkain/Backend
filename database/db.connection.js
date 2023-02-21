const { Sequelize } = require("sequelize");
const mysql = require("mysql2/promise");
const config = require("./db.config");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    port: config.port,
    dialect: "mysql",
  }
);

module.exports = { sequelize };
