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
                attributes : [],
                required: true,
                include : {
                    model: Driver,
                    required: true,
                    attributes : ['licenseNumber', 'firstName', 'lastName'],
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
    
        let cars = await Car.update({
                status : 'In Service'
            },
            {
            where : {
                [Op.or] :{
                    productionDate : {
                        [Op.lt] : '01/01/2017'
                    },
                    mileage : {
                        [Op.gt] : 100_000 
                    },
                },
            }
        })
       
        res.status(200).json({ type : 'success', body : cars});
        
         // TO TEST SELECTION
        // let cars = await Car.findAll({
        //         where : {
        //             [Op.or] :{
        //                 productionDate : {
        //                     [Op.lt] : '2017-01-01 00:00:00'
        //                 },
        //                 mileage : {
        //                     [Op.gt] : 100_000 
        //                 },
        //             },
        //         }
        //     });
        // res.status(200).json({ type : 'success', body : cars});
    },

    async setCarOnParking(req, res) {

        let cars = await Car.findAll(
        {
            where : {
                status : {
                    [Op.notIn] : ['In Use', 'Reserved']
                }
            },
            include : {
                model : Booking,
                attributes : [[sequelize.fn('COUNT', sequelize.col('carId')), 'count']],
            },
            group : 'id',
            having : {
                'Bookings.count' : {
                    [Op.gt] : 2
                }
            }
        });

        for(let car of cars) {
            car.update({
                geoLatitude : 53.8882836,
                geoLongitude : 27.5442615
            })
        }

        res.status(200).json({ type : 'success', body : cars});
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