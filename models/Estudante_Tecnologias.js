const Tecnologias = require("./Tecnologias");
const Estudante = require('./Estudante')
const {DataTypes} = require('sequelize');
const db = require("../db/conn")

const Estudante_Tecnologias = db.define(
    'Estudante_Tecnologias',
    {
        Name: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        Stack: {
            type: DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
       
    },
);

Estudante_Tecnologias.belongsTo(Estudante, {
    foreignKey: 'Name',
});
Estudante_Tecnologias.belongsTo(Tecnologias, {
    foreignKey: 'Stack',
});


module.exports = Estudante_Tecnologias