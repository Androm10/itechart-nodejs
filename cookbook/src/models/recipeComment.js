const { DataTypes }= require('sequelize');
const sequelize = require('../database/sequelize');

let recipeComment = sequelize.define(
    'recipeComment',
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        userId : {
            type : DataTypes.BIGINT.UNSIGNED,
            allowNull : false,
            field: 'user_id'
        },
        recipeId : {
            type : DataTypes.BIGINT.UNSIGNED,
            allowNull : false,
            field : 'recipe_id'
        },
        text : {
            type : DataTypes.TEXT,
            allowNull : false
        },
        rate : {
            type : DataTypes.SMALLINT,
            allowNull : false
        }
    },    
    {
        tableName : 'r_comments',
        timestamps: false
    }
);

module.exports = recipeComment;