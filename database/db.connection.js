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
async function connectDB() {
  const connection = mysql.createConnection({
    host: config.host,
    user: config.username,
    password: config.password,
  });
  connection.query(
    `CREATE DATABASE IF NOT EXISTS ${config.database};`,
    (err, result) => {
      console.log("Database created");
      if (err) throw err;
      sequelize
        .sync({ force: false })
        .then(() => console.log("Database connected"))
        .catch((err) => console.log(err));
    }
  );
  connection.end();
}

module.exports = { sequelize, connectDB };
