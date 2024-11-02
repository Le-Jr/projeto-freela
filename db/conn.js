const { Sequelize } = require('sequelize');

const db = new Sequelize('glob_globalnetworks', 'glob_globalnetworks', 'G1lob4ln3twork5', {
    host: '45.90.223.37',
    dialect: 'mysql'
});

module.exports = db