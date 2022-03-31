const sequelize = require('./sequelize');

require('../models');

sequelize.sync()
.then( async ()=> {
    
    await sequelize.models.role.findOrCreate({ where : {name : 'User'}});
    await sequelize.models.role.findOrCreate({ where : {name : 'Admin'}});

});

module.exports = sequelize;

