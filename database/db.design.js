const User = require('../models/User')
const {sequelize} = require('./db.connection')


const designDB = async function() {
    await sequelize.sync({force: false})
    //bsucar que existeixi
    User.create({name: "Admin", rol:0, password:"Prova", email: "admin@example.com"})
}

module.exports = { designDB }