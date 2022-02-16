const { DataTypes }= require('sequelize');
const sequelize = require('../database/sequelize');

let cookbook = sequelize.define(
    'cookbook',
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },       
        name: {
            type: DataTypes.CHAR(100),
            allowNull: false,
            unique: true,
        },
        avatar : {
            type: DataTypes.STRING(255),
            default: 'none'
        },
        description : {
            type : DataTypes.TEXT
        }
    },
    {
        tableName : 'cookbooks',
        timestamps: false
    }
);

module.exports = cookbook;