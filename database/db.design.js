const User = require('../models/User')
const {sequelize} = require('./db.connection')


const designDB = function() {
    sequelize.sync({force: false})
    User.create({name: "Admin", rol:0, password:"Prova", email: "admin@example.com"})
}

module.exports = { designDB }