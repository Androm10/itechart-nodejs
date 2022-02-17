let config = require('../config');
let crypt = require('../utils/crypt');
let jwt = require('jsonwebtoken');

const userRepository = require('../repository/userRepository');

module.exports = {

    login : async function(instance) {
        let user = await userRepository.getByLogin(instance.login);
        
        if(!user)
            throw(buildError(400, 'Login or password is incorrect'));

        if(!crypt.comparePassword(instance.password, user.password))
            throw(buildError(400, 'Login or password is incorrect'));


        let accessToken = jwt.sign({
            userId : user.id,
            refresh : false,
            exp: Math.floor(Date.now() / 1000) + (60 * 60) //1h
        }, config.secret);

        let refreshToken = jwt.sign({
            userId : user.id,
            refresh : true,
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) //1d
        }, config.secret);

        return {accessToken, refreshToken};    
    }
}