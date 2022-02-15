const { DataTypes }= require('sequelize');
const sequelize = require('../database/sequelize');

let cookbooksRecipes = sequelize.define(
    'cookbooksRecipes',
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },       
        cookbookId : {
            type: DataTypes.BIGINT.UNSIGNED,
            field: 'cookbook_id'
        },
        recipeId : {
            type: DataTypes.BIGINT.UNSIGNED,
            field: 'recipe_id'
        },
    },
    {
        tableName : 'cookbooks_recipes'
    }
);

module.exports = cookbooksRecipes;