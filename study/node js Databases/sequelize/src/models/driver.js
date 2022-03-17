const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('Driver', {
        id : {
            type : DataTypes.BIGINT.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            unique : true,
            allowNull : false,
        },
        licenseNumber : {
            type : DataTypes.BIGINT.UNSIGNED,
            allowNull : false,
        },
        firstName : {
            type : DataTypes.STRING(50),
            allowNull : false
        },
        lastName : {
            type : DataTypes.STRING(50),
            allowNull : false
        },
        creditId : {
            type : DataTypes.BIGINT.UNSIGNED,
            allowNull : true 
        }
    })

}