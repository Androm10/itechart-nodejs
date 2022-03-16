const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('Run', {
        id : {
            type : DataTypes.BIGINT.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        startDate : {
            type : DataTypes.DATE,
            allowNull : false
        },
        startFuelLevel : {
            type : DataTypes.SMALLINT,
            validate : {
                max : 100,
                min : 0
            }
        },
        startMileage : {
            type : DataTypes.INTEGER,
        },
        driverId : {
            type : DataTypes.BIGINT.UNSIGNED,
            allowNull : false 
        }
    })

}