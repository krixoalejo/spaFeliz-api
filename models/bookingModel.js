const Sequelize = require('sequelize');
const conn = require('../database/connection');

module.exports = conn.define('booking', {
    id: { type: Sequelize.SMALLINT, primaryKey: true },
    name1: Sequelize.STRING,
    name2: Sequelize.STRING,
    lastName1: Sequelize.STRING,
    lastName2: Sequelize.STRING,
    email: Sequelize.STRING,
    date: Sequelize.STRING,
    hour: Sequelize.STRING,
    serviceType: Sequelize.SMALLINT
}, { 
    freezeTableName: true,
    timestamps: false
})