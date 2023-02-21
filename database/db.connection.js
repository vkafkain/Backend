const { Sequelize } = require("sequelize");
const mysql = require("mysql2");
const config = require("./db.config");

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: "mysql",
  }
);
const connectDB = async () => {
  try{
      const connection = await mysql.createConnection({
      host: config.host,
      port: config.port,
      user: config.username,
          password: config.password
      });
      await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME}`),
      await sequelize.sync({ force: false });
      console.log('Connection to mySQL-DB has been established successfully')
  }catch(error) {
      console.error('Unable to connect to the database:', error);
  }
};

module.exports = { sequelize, connectDB };
