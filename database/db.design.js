const mysql = require("mysql2/promise");
const User = require('../models/User')
const {sequelize} = require('./db.connection')
const config = require("./db.config");



const designDB = async function() {
    const dbcnx = await mysql.createConnection({
        host: config.host,
        port: config.port,
        user: config.username,
        password: config.password
    })
    await dbcnx.query(`CREATE DATABASE IF NOT EXISTS \`${config.database}\``)
    await dbcnx.end()

    await sequelize.sync({force: false})
    //bsucar que existeixi

    //User.create({name: "Admin", rol:0, password:"Prova", email: "admin@example.com"})
    
}

module.exports = { designDB }