const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('Credit', {
        id : {
            type : DataTypes.BIGINT.UNSIGNED,
            primaryKey : true,
            autoIncrement : true,
            unique : true,
            allowNull : false,
        },
        number : {
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
        holder : {
            type : DataTypes.VIRTUAL,
            get() {
                return `${this.firstName} ${this.lastName}`
            },
            set(v) {
                throw new Error('Cannot set virtual property')
            }
        },
        validDate : {
            type : DataTypes.DATE,
            allowNull : false 
        }



    })

}