import models from './models';

export default async (): Promise<void> => {

    if((await models.carModel.find()).length >= 5)
        return;

    let cars = await models.carModel.create([
        {
            VIN : 52353,
            registrationNumber : 75432,
            productionInfo : {
                    brand : 'Toyota',
                    model : 'Camri',
                    date : '2021/05/05',
                },
            status : 'In Use',
            fuelLevel : 12,
            mileage : 5363,
            currentRun : {
                startDate : '2022/01/01',
                driver : {
                    licenceNumber : '5252112',
                    firstName : 'Alex',
                    lastName : 'Somer',
                    card : {
                        number : '3325 3252 1214 2551',
                        owner : 'ALEX SOMER',
                        validThrough : '2022/01/01',
                    }
                },
                startFuelLevel : 12,
                startMileage : 3211,
            },
            location : {
                type: 'Point',
                coordinates : [12.4432, -43.8572]
            },
            bookingHistory : [{
                startDate : '2021/01/01',
                driver : {
                    licenceNumber : '5252112',
                    firstName : 'Nikita',
                    lastName : 'Seriy',
                    card : {
                        number : '3325 6642 6932 3342',
                        owner : 'NIKITA SERIY',
                        validThrough : '2024/01/01',
                    }
                },
                startFuelLevel : 79,
                startMileage : 240,
                finishFuelLevel : 54,
                finishMileage : 256
            }]
        },

        {
            VIN : 778421,
            registrationNumber : 45226,
        
            productionInfo : {
                    brand : 'Volkswagen',
                    model : 'Polo',
                    date : '2017/09/23',
                },
            status : 'Free',
            fuelLevel : 77,
            mileage : 5221,
            currentRun : undefined,
            location : {
                type: 'Point',
                coordinates : [14.8432, -41.8530]
            },
            bookingHistory : [{

                startDate : '2020/04/21',
                driver : {
                    licenceNumber : '5252112',
                    firstName : 'Mikhail',
                    lastName : 'Leontiev',
                    card : {
                        number : '7734 3267 5581 9431',
                        owner : 'MIKHAIL LEONTIEV',
                        validThrough : '2024/04/01',
                    }
                },
                startFuelLevel : 79,
                startMileage : 643,
                finishFuelLevel : 12,
                finishMileage : 774
                },
                
                {
                startDate : '2019/03/15',
                driver : {
                    licenceNumber : '34793065',
                    firstName : 'Kirill',
                    lastName : 'Ivanov',
                    card : {
                        number : '7731 3241 3311 8774',
                        owner : 'NIKITA SERIY',
                        validThrough : '2025/11/01',
                    }
                },
                startFuelLevel : 53,
                startMileage : 230,
                finishFuelLevel : 32,
                finishMileage : 312
                },
                {
                startDate : '2019/02/12',
                driver : {
                    licenceNumber : '674723',
                    firstName : 'Nikita',
                    lastName : 'Seriy',
                    card : {
                        number : '3325 6642 6932 3342',
                        owner : 'NIKITA SERIY',
                        validThrough : '2024/01/01',
                    }
                },
                startFuelLevel : 23,
                startMileage : 129,
                finishFuelLevel : 12,
                finishMileage : 151
                }
            ],
        },

        {
            VIN : 1154284,
            registrationNumber : 990112,
        
            productionInfo : {
                    brand : 'BMW',
                    model : 'X5',
                    date : '2016/01/26',
                },
            status : 'In Service',
            fuelLevel : 12,
            mileage : 122440,
            currentRun : undefined,
            location : {
                type: 'Point',
                coordinates : [11.4852, -41.694]
            },
            bookingHistory : undefined
        },

        {
            VIN : 847129,
            registrationNumber : 93832,
        
            productionInfo : {
                    brand : 'Honda',
                    model : 'Today',
                    date : '1988/04/08',
                },
            status : 'Reserved',
            fuelLevel : 63,
            mileage : 70527,
            currentRun : {
                startDate : '2022/01/01',
                driver : {
                    licenceNumber : '9944728',
                    firstName : 'Vadim',
                    lastName : 'Kirillov',
                    card : undefined
                },
                startFuelLevel : 87,
                startMileage : 70527,
            },
            location : {
                type: 'Point',
                coordinates : [14.9885, -39.8437]
            },
            bookingHistory : undefined
        },

        {
            VIN : 7261236,
            registrationNumber : 821235,
        
            productionInfo : {
                    brand : 'Ford',
                    model : 'Bronco',
                    date : '1995/07/26',
                },
            status : 'Unavailable',
            fuelLevel : 87,
            mileage : 96364,
            currentRun : undefined,
            location : {
                type: 'Point',
                coordinates : [18.5633, -54.98612]
            },
            bookingHistory : [{
                startDate : '2022/01/01',
                driver : {
                    licenceNumber : '85532',
                    firstName : 'Sergey',
                    lastName : 'Kremov',
                    card : {
                        number : '3325 4278 4535 7274',
                        owner : 'SERGEY KREMOV',
                        validThrough : '2026/05/01',
                    }
                },
                startFuelLevel : 87,
                startMileage : 96364,
                finishFuelLevel : 31,
                finishMileage : 96443
            },
            {
                startDate : '2016/01/01',
                driver : {
                    licenceNumber : '85532',
                    firstName : 'Daniil',
                    lastName : 'Kozlovskiy',
                    card : {
                        number : '7373 3495 2434 6639',
                        owner : 'DANIL KOZLOVSKIY',
                        validThrough : '2022/11/01',
                    }
                },
                startFuelLevel : 53,
                startMileage : 81251,
                finishFuelLevel : 11,
                finishMileage : 81305
            },

            {
                startDate : '2018/10/17',
                driver : {
                    licenceNumber : '8940435',
                    firstName : 'Maxim',
                    lastName : 'Lipov',
                    card : {
                        number : '4122 2211 8904 7992',
                        owner : 'MAXIM LIPOV',
                        validThrough : '2018/10/18',
                    }
                },
                startFuelLevel : 75,
                startMileage : 86463,
                finishFuelLevel : 65,
                finishMileage : 86488
            },

            ]
        }
    ]);

    cars.forEach(car => {
        car.save();
    })

    //models.carModel.bulkWrite()

}