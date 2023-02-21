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
        type: Sequelize.ENUM(['jardinera', 'equipaje', 'coordinacion']),
        allowNull: false
    },
    full_time: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    part_time: {
        type: Sequelize.SMALLINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    full_time_cost: {
        type: Sequelize.MEDIUMINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    part_time_cost: {
        type: Sequelize.MEDIUMINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    },
    total_cost: {
        type: Sequelize.MEDIUMINT.UNSIGNED,
        allowNull: false,
        defaultValue: 0
    }
})

module.exports = GroundOperation;