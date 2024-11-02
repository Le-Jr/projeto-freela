const {DataTypes } = require('sequelize');
const db = require("../db/conn")

const Tecnologias = db.define(
    'Tecnologias',
    {
        Stack: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
    }
);

module.exports = Tecnologias