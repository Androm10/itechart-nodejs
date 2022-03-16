const sequelize = require("./sequelize");

const Booking = require("../models/booking")(sequelize);
const Car = require("../models/car")(sequelize);
const Credit = require("../models/credit")(sequelize);
const Driver = require("../models/driver")(sequelize);
const Run = require("../models/run")(sequelize);


Booking.belongsTo(Car, {foreignKey : 'carId'});
Car.hasMany(Booking, {foreignKey : 'carId'});

Booking.belongsTo(Run, {foreignKey : 'runId'});
Run.hasMany(Booking, {foreignKey : 'runId'});

Car.belongsTo(Run, {foreignKey : 'runId'});
Run.hasOne(Car, {foreignKey : 'runId'});

Run.belongsTo(Driver, {foreignKey : 'driverId'});
Driver.hasOne(Run, {foreignKey : 'driverId'});

Driver.belongsTo(Credit, {foreignKey : 'creditId'});
Credit.hasOne(Driver, {foreignKey : 'creditId'});

sequelize.sync({alter : true});

module.exports = {
    Booking,
    Car,
    Credit,
    Driver,
    Run
}