const models = require('../database').models;
const crypt = require('../utils/crypt');

module.exports = {
    
    addUser : async function(data) {
        
        let existentUser = await models.user.findOne( {where : { login: data.login}} );

        if(existentUser)
            throw(new Error('such login already exist'));

        let user = await models.user.create( {login: data.login, password: data.password, status: 'active'});
        

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

    },

    updateProfile : async function(userId, profile) {

        let userInfo = await models.userInfo.findOne({where : {userId}});

        await userInfo.update(profile);

        return userInfo;

    }

}