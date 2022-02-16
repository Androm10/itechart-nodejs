const models = require('../database').models;
const crypt = require('../utils/crypt');

module.exports = {
    
    addUser : async function(data) {
        
        data.password = await crypt.cryptPassword(data.password);


        let existentUser = await models.user.findOne( {where : { login: data.login}} );

        if(existentUser)
            throw(new Error('such login already exist'));

        let user = await models.user.create( {login: data.login, password: data.password});
        

        user.createUserInfo({ username: data.username});

        let userRole = await models.role.findOne({where : { name: 'User' }});

        user.addRole(userRole);

        return user;

    },

    getById : async function(userId) {

        let user = await models.user.findByPk(userId);

        if(!user)
            throw(new Error('no such user'));

        return user;

    },

    getByLogin : async function(login) {

        let user = await models.user.findOne({where : {login : login}});

        if(!user)
            throw(new Error('no such user'));

        return user;

    }

}