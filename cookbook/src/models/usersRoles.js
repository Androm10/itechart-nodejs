const { DataTypes } = require('sequelize');
const sequelize = require('../database/sequelize');

let usersRoles = sequelize.define(
    'usersRoles',
    {
        id: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            unique: true,
            autoIncrement: true
        },
        userId: {
            type: DataTypes.BIGINT.UNSIGNED,
            allowNull: false,
            field: 'user_id'
        },
        roleId: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
            allowNull: false,
            field: 'role_id'
        },      
    },
    {
        tableName : 'users_roles'
    }
);

module.exports = usersRoles;