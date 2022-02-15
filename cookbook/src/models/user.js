const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

let user = sequelize.define(
    'user',
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        login: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING(50),
            allowNull: false
        }       
    },
    {
        tableName : 'users'
    }
);

module.exports = user;