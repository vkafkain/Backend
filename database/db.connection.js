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
const connectDB = async () => {
  try{
      await sequelize.sync({ force: false });
      console.log('Connection to mySQL-DB has been established successfully')
  }catch(error) {
      console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectDB };
