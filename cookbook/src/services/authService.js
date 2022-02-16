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


        let token = jwt.sign({
            userId : user.id,
            exp: Math.floor(Date.now() / 1000) + (60 * 60) 
        }, config.secret);

        return {token: token};    
    }
}