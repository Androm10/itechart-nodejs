

module.exports = async (Car, Credit, Driver, Run, Booking) => {
    
    await Credit.bulkCreate([{
        number : 4521_4434_7847_9525n,
        firstName : 'Oleg',
        lastName : 'Bocharov',
        validDate : '05/25/2025'
    }, {
        number : 6631_6444_7637_1445n,
        firstName : 'John',
        lastName : 'Smith',
        validDate : '07/13/2024'
    }, {
        number : 7742_5524_5877_5234n,
        firstName : 'Anna',
        lastName : 'Mikhailova',
        validDate : '12/08/2025'
    }, {
        number : 9735_4455_3123_3366n,
        firstName : 'Jack',
        lastName : 'Harris',
        validDate : '04/04/2023'
    }, {
        number : 4521_1795_6462_7511n,
        firstName : 'George',
        lastName : 'Fisher',
        validDate : '02/11/2026'
    }])


    await Driver.bulkCreate([{
        licenseNumber : 552352,
        firstName : 'Oleg',
        lastName : 'Bocharov',
        creditId : 1
    }, {
        licenseNumber : 666331,
        firstName : 'John',
        lastName : 'Smith',
        creditId : 2
    }, {
        licenseNumber : 663195,
        firstName : 'Anna',
        lastName : 'Mikhailova',
        creditId : null
    }, {
        licenseNumber : 1846793,
        firstName : 'Jack',
        lastName : 'Harris',
        creditId : 4
    }, {
        licenseNumber : 885953,
        firstName : 'George',
        lastName : 'Fisher',
        creditId : null
    }])


    await Run.bulkCreate([{
        startDate : '04/22/2020',
        startFuelLevel : 91,
        startMileage : 44412,
        driverId : 4  
    }, {
        startDate : '07/21/2017',
        startFuelLevel : 77,
        startMileage : 100342,
        driverId : 3  
    }, {
        startDate : '11/01/2018',
        startFuelLevel : 85,
        startMileage : 53398,
        driverId : 1  
    }, {
        startDate : '09/18/2021',
        startFuelLevel : 75,
        startMileage : 10405,
        driverId : 2  
    }, {
        startDate : '05/13/2019',
        startFuelLevel : 74,
        startMileage : 2125,
        driverId : 5  
    }])


    await Car.bulkCreate([{
        VIN : 4325256,
        registrationNumber : 552,
        brand : 'BMW',
        model : 'X6',
        productionDate : '12/12/2012',
        status : 'Free',
        fuelLevel : 54,
        mileage : 44590,
        runId : 1,
        geoLatitude : 552.2345,
        geoLongitude : -85.43
    }, {
        VIN : 1288526,
        registrationNumber : 231,
        brand : 'Volkswagen',
        model : 'Polo',
        productionDate : '04/05/2018',
        status : 'Unavailable',
        fuelLevel : 24,
        mileage : 12905,
        runId : 4,
        geoLatitude : 122.298,
        geoLongitude : 65.578
    }, {
        VIN : 8554527,
        registrationNumber : 112,
        brand : 'Porsche',
        model : 'Panamera',
        productionDate : '09/24/2008',
        status : 'Reserved',
        fuelLevel : 93,
        mileage : 55502,
        runId : 3,
        geoLatitude : 331.834,
        geoLongitude : -5.12
    }, {
        VIN : 77347831,
        registrationNumber : 985,
        brand : 'Toyota',
        model : 'Camry',
        productionDate : '04/05/2021',
        status : 'Reserved',
        fuelLevel : 71,
        mileage : 7125,
        runId : 5,
        geoLatitude : 88.537,
        geoLongitude : -53.82
    }, {
        VIN : 884233,
        registrationNumber : 884,
        brand : 'Honda',
        model : 'Quint',
        productionDate : '08/29/1981',
        status : 'Free',
        fuelLevel : 10,
        mileage : 122905,
        runId : 2,
        geoLatitude : -663.211,
        geoLongitude : 77.43
    }])


    Booking.bulkCreate([{
        carId : 1,
        runId : 1,
        finishFuelLevel : 44,
        finishMileage : 43590
    }, {
        carId : 2,
        runId : 3,
        finishFuelLevel : 63,
        finishMileage : 11104
    }, {
        carId : 3,
        runId : 4,
        finishFuelLevel : 12,
        finishMileage : 54400
    }, {    
        carId : 5,
        runId : 2,
        finishFuelLevel : 56,
        finishMileage : 114794
    }, {
        carId : 4,
        runId : 5,
        finishFuelLevel : 55,
        finishMileage : 6553
    }, {
        carId : 1,
        runId : 3,
        finishFuelLevel : 55,
        finishMileage : 6553
    }, {
        carId : 1,
        runId : 4,
        finishFuelLevel : 55,
        finishMileage : 6553
    }])


}