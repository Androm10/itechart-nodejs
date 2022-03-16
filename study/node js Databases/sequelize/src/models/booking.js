const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    return sequelize.define('Booking', {
        id : {
            type : DataTypes.BIGINT.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            autoIncrement : true
        },
        carId : {
            type : DataTypes.BIGINT.UNSIGNED,
            allowNull : false
        },
        runId : {
            type : DataTypes.BIGINT.UNSIGNED,
            allowNull : false
        },
        finishFuelLevel : {
            type : DataTypes.SMALLINT,
            validate : {
                max : 100,
                min : 0
            }
        },
        finishMileage : {
            type : DataTypes.INTEGER,
        },
    })

}