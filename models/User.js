const Sequelize = require('sequelize');
const { sequelize } = require('../database/db.connection');

const User = sequelize.define("User", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING(25),
        unique: true,
        allowNull: false
    },
    role: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 1,
        comment: '0: Administrador, 1: User normal'
    },
    password: {
        type: Sequelize.STRING(65),
        allowNull: false
    },
    email: {
        type: Sequelize.STRING(100),
        allowNull: false,
        unique: true
    }
});

/* User.prototype.getName = function(){
    if(this.name === null || this.name.length===0){return "ANÒNIM/A"}
    return this.name
} */

module.exports = User;