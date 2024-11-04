const { Sequelize } = require('sequelize');

const db = new Sequelize('glob_globalnetworks', 'glob_globalnetworks', '', {
    host: '',
    dialect: 'mysql'
});

module.exports = db