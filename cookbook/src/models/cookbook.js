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
        creatorId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            field: 'creator_id'
        },       
        name: {
            type: DataTypes.CHAR(100),
            allowNull: false
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