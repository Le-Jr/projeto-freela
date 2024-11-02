const {DataTypes} = require('sequelize');
const db = require("../db/conn")

const Estudante = db.define(
    'Estudante',
    {
        Name: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        Telefone: {
            type: DataTypes.STRING,
        },
        Email: {
            type: DataTypes.STRING,
        },
        Periodo: {
            type: DataTypes.INTEGER,
        },
       
    },
);

module.exports = Estudante