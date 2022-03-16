const { Op } = require('sequelize');
let { Booking, Car, Credit, Driver, Run } = require('../sequelize');
const sequelize = require('../sequelize/sequelize');

module.exports = {

    async getEmptyCarsInUse (req, res) {

        let cars = await Car.findAll({where : {
            status : 'In Use',
            fuelLevel : { [Op.lt] : 25}
        }});

        res.status(200).json({ type : 'success', body : cars});

    },

    async getCarsWithUnregisteredCard (req, res) {

        let cars = await Car.findAll({
            attributes : ['VIN', 'geoLatitude', 'geoLongitude'],
            include : {
                model : Run,
                include : {
                    model: Driver,
                    attributes : ['licenceNumber', 'firstName', 'lastName'],
                    where : {
                        creditId : null
                    }
                }
            },
        });

        res.status(200).json({ type : 'success', body : cars});

    },

    async addCar (req, res) { 

        let carData = {
            VIN : req.body.VIN,
            registrationNumber : req.body.registrationNumber,
            brand : req.body.brand,
            model : req.body.model,
            productionDate : req.body.productionDate,
            status : req.body.status,
            fuelLevel : req.body.fuelLevel,
            mileage : req.body.mileage,
            runId : null,
            geoLatitude : req.body.geoLatitude,
            geoLongitude : req.body.geoLongitude
        }

        let car = await Car.create(carData);

        res.status(200).json({ type : 'success', body : car});
    },

    async setCarInService(req, res) {
    
        let id = req.params.id;

        let car = await Car.update({
                status : 'In Service'
            },
            {
            where : {
                productionDate : {
                    [Op.lt] : '01/01/2017'
                },
                id : id,
                mileage : {
                    [Op.gt] : 100_000 
                }

            }
        })


        res.status(200).json({ type : 'success', body : car[0]});
    },

    async setCarOnParking(req, res) {

        let id = req.params.id;

        let car = await Car.update({
            geoLatitude : 53.8882836,
            geoLongitude : 27.5442615
        },
        {
            where : {
                status : {
                    [Op.notIn] : ['In Use', 'Reserved']
                },
                id : id
            },
            include : {
                model : Booking,
                attributes : [],
                where : {
                    [sequelize.fn('COUNT', sequelize.col('id'))] : {
                        [Op.gt] : 2
                    }
                }
            }
        });

        res.status(200).json({ type : 'success', body : car[0]});
    },


    async deleteCarByVIN(req, res) {

        let car = await Car.findOne({ 
            where : {
                VIN : req.params.VIN
            }
        })
        
        if(!car)
            throw new Error('no such car');

        car.destroy();

        res.status(200).json({ type : 'success', body : true});
    }

}