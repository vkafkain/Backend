const mysql = require("mysql2/promise");
const User = require('../models/User')
const bcrypt = require('bcrypt');
const { sequelize } = require('./db.connection')
const config = require("./db.config");

const designDB = async function () {
    const dbcnx = await mysql.createConnection({
        host: config.host,
        port: config.port,
        user: config.username,
        password: config.password
    })
    await dbcnx.query(`CREATE DATABASE IF NOT EXISTS \`${config.database}\``)
    await dbcnx.end()

    await sequelize.sync({ force: false })
    try {
        const password = await bcrypt.hash(`${config.admin_password}`, 2)
        await User.create({ name: "Admin", rol: 0, password, email: "admin@example.com" })
    } catch (error) { console.log("Usuari Admin ja hi és"); }
}

module.exports = { designDB }