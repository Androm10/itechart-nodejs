const sequelize = require('./sequelize');

require('../models');

sequelize.sync()
.then( async ()=> {
    
    let role = await sequelize.models.role.findOne({name : 'User'});

    if(!role)
        sequelize.models.role.create({name: 'User'});
    
    role = await sequelize.models.role.findOne({name : 'Admin'});

    if(!role)
        sequelize.models.role.create({name: 'Admin'});

});

module.exports = sequelize;

