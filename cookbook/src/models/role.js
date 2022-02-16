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
            unique: true,
            allowNull: false
            
        }
    },
    {
        tableName : 'roles',
        timestamps: false
    }
);

module.exports = role;