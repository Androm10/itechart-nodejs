const { DataTypes }= require('sequelize');
const sequelize = require('../database/sequelize');

let recipe = sequelize.define(
    'recipe',
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        }, 
        creatorId : {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            field: 'creator_id'
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
        },
        directions : {
            type : DataTypes.TEXT
        },
        ingridients : {
            type : DataTypes.TEXT
        },
        cookingTime : {
            type : DataTypes.INTEGER,
            field : 'cooking_time'
        }
    },
    {
        tableName : 'recipes',
        timestamps: false
    }
);

module.exports = recipe;