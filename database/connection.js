const Sequelize = require('sequelize');

const conn = new Sequelize('xilkyrjLD6', 'xilkyrjLD6', 'oGBCSRh5p2', {
    host: 'remotemysql.com',
    dialect: 'mysql'
})

conn.authenticate()
    .then(()=> console.log('Connection OK with database'))
    .catch((err)=> console.log('Connection error with database', err))


module.exports = conn;