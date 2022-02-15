const { DataTypes }= require('sequelize');
const sequelize = require('../database/sequelize');

let cookbookComment = sequelize.define(
    'cookbookComment',
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
        cookbookId : {
            type : DataTypes.BIGINT.UNSIGNED,
            allowNull : false,
            field : 'cookbook_id'
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
        tableName : 'c_comments'
    }
);

module.exports = cookbookComment;