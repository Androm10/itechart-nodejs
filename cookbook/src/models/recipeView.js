const { DataTypes }= require('sequelize');
const sequelize = require('../database/sequelize');

let recipeView = sequelize.define(
    'recipeView',
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
    },    
    {
        tableName : 'r_views'
    }
);

module.exports = recipeView;