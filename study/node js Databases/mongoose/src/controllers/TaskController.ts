import { Request, Response } from 'express';
import models from '../mongoose';

class TaskController {

    async getEmptyCarsInUse (req: Request, res: Response) {

        let cars = await models.carModel.find({
            status : 'In Use',
            fuelLevel : {
                $lt : 25
            }
        })

        res.status(200).json({ type : 'success', body : cars});

    }

    async getCarsWithUnregisteredCard (req: Request, res: Response) {

        let cars = await models.carModel.find({
            status : 'Reserved',
            'currentRun.driver.card' : null
        }, {
            VIN : 1,
            location : 1,
            firstName : '$currentRun.driver.firstName',
            lastName : '$currentRun.driver.lastName',
            licenceNumber : '$currentRun.driver.licenceNumber'
        });

        res.status(200).json({ type : 'success', body : cars});

    }

    async addCar (req: Request, res: Response) { 

        let car = {
            VIN: req.body.VIN,
            registrationNumber: req.body.registrationNumber,
            productionInfo: {
                brand: req.body.brand,
                model: req.body.model,
                date: req.body.date
            },
            status: 'Free',
            fuelLevel: req.body.fuelLevel,
            mileage: req.body.mileage,
            location: {
                type: 'Point',
                coordinates: [req.body.x, req.body.y]
            },
        }

        let instance = new models.carModel(car);
        
        await instance.save();

        console.log('added a car', instance);

        res.status(200).json({ type : 'success', body : instance});
    }

    async setCarInService(req: Request, res: Response) {
      
        let cars = await models.carModel.updateMany({
            $or : [{
                'productionInfo.date' : {
                    $lt : '2017/01/01'
                }
            }, {
                mileage : {
                    $gt : 100_000
                }
            }]
        }, {
            status : 'In Service'
        })
        
        res.status(200).json({ type : 'success', body : cars});

    }

    async setCarOnParking(req: Request, res: Response) {

        let cars = await models.carModel.updateMany({
            bookingHistory : {
                $exists : true
            },
            'bookingHistory.length' : {
                $gt : 2
            },
            status : {
                $nin : ['Reserved', 'In Use']
            }

        },{
            'location.coordinates' : [53.8882836, 27.5442615]
        })


        res.status(200).json({ type : 'success', body : cars});
    }


    async deleteCarByVIN(req: Request, res: Response) {

        await models.carModel.deleteOne({
            VIN : req.params.VIN
        })

        res.status(200).json({ type : 'success', body : true});
    }


}

export default new TaskController();