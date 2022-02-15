const sequelize = require('./sequelize');

require('../models');

sequelize.sync();

module.exports = sequelize;

