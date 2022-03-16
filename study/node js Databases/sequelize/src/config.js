const logger = require('./logger');
let res = require('dotenv').config();

if(res.error) {
    logger.log('error', res.error);
}

let options = {

    sequelize : {
        dbName :  process.env.DB_NAME || 'car_sharing',
        dbAddress : process.env.DB_ADDR || 'localhost',
        dbPort : process.env.DB_PORT || '3307',
        dbUser : process.env.DB_USER || 'user',
        dbPassword : process.env.DB_PASS || '1111',
        dbDialect : process.env.DB_DIALECT || 'mysql'
    }

} 

module.exports = options;