const mysql = require("mysql2/promise");
const User = require('../models/User')
const bcrypt = require('bcrypt');
const { sequelize } = require('./db.connection')
const config = require("./db.config");

// Sets up db connection
const designDB = async function () {
    const mysqlConnection = await mysql.createConnection({

        host: config.host,
        port: config.port,
        user: config.username,
        password: config.password
    })
    await mysqlConnection.query(`CREATE DATABASE IF NOT EXISTS \`${config.database}\``);
    await mysqlConnection.end();
    await sequelize.sync({ force: false });

    try {
        const password = await bcrypt.hash(`${config.admin_password}`, 2)
        await User.create({ name: "Admin", role: 0, password, email: "admin@example.com" })
        await User.create({ name: "guest", role: 1, password, email: "guest@example.com" })
    } catch (error) {
        console.log("User Admin already registered");
    }
}

module.exports = { designDB };