const { Sequelize } = require('sequelize');

const db = new Sequelize('globalnetworks', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db