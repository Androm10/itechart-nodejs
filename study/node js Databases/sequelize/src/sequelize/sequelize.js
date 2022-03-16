let Sequelize = require('sequelize');
const logger = require('../logger');
const config = require('../config').sequelize;

let options = {
    dialect,
    host,
    port
}

let sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    options
)

sequelize.authenticate().catch(err => {
    logger.log('error', err);
});



module.exports = sequelize;