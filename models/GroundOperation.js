const Sequelize = require('sequelize')
const { sequelize } = require('../database/db.connection')

const GroundOperation = sequelize.define("ground_operation", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    day: {
        type: Sequelize.DATEONLY,
        allowNull: false,
    },
    hour: {
        type: Sequelize.TINYINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0,
        validate: {
            min: 0,
            max: 23
        }
    },
    handling_function: {
        type: Sequelize.STRING,
        allowNull: false
    },
    full_time_employees: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    part_time_employees: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    total_employees: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    full_time_employees_cost: {
        type: Sequelize.FLOAT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    part_time_employees_cost: {
        type: Sequelize.FLOAT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    total_cost: {
        type: Sequelize.FLOAT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    }
})

module.exports = GroundOperation;