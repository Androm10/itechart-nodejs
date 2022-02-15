const Sequelize = require('sequelize');
let settings = require('../config').database;


let options = {
    dialect : settings.dialect,
    host : settings.ip,
    port : settings.port
}


let sequelize = new Sequelize(
    settings.name,
    settings.user,
    settings.password,
    options
);

sequelize.authenticate()
    .catch((e) => {
        console.log('error while connecting to database' + e);
        return;
});
console.log('connection to database completed');

module.exports = sequelize;