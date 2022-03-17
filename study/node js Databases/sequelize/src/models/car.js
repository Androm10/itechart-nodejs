const { DataTypes } = require("sequelize");



module.exports = (sequelize) => {
    return sequelize.define('Car', {
        id : {
            type : DataTypes.BIGINT.UNSIGNED,
            primaryKey : true,
            allowNull : false,
            unique : true,
            autoIncrement : true
        },
        VIN : {
            type : DataTypes.BIGINT.UNSIGNED,
            allowNull : false,
            unique : true,
        },
        registrationNumber : {
            type : DataTypes.BIGINT.UNSIGNED,
            allowNull : false,
            unique : true
        },
        brand : {
            type : DataTypes.STRING(50)
        },
        model : {
            type : DataTypes.STRING(50)
        },
        productionDate : {
            type : DataTypes.DATE
        },
        status : {
            type : DataTypes.STRING(20),
            validate : {
                isIn : [['Free', 'Reserved', 'In Use', 'Unavailable', 'In Service']]
            }
        },
        fuelLevel : {
            type : DataTypes.SMALLINT,
            validate : {
                max : 100,
                min : 0
            }
        },
        mileage : {
            type : DataTypes.INTEGER.UNSIGNED
        },
        runId : {
            type : DataTypes.BIGINT.UNSIGNED
        },
        geoLatitude : {
            type : DataTypes.FLOAT(8)
        },
        geoLongitude : {
            type : DataTypes.FLOAT(8)
        }


    })

}