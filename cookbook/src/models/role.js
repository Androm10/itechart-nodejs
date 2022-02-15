const { DataTypes }= require('sequelize');
const sequelize = require('../database/sequelize');

let role = sequelize.define(
    'role',
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },       
        name: {
            type: DataTypes.CHAR(50),
            allowNull: false
        }
    },
    {
        tableName : 'roles'
    }
);

module.exports = role;