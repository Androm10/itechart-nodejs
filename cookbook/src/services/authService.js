let secret = require('../config').secret;
let crypt = require('../utils/crypt');
let jwt = require('jsonwebtoken');

const userRepository = require('../repository/userRepository');
const jwtBlacklist = require('../utils/jwtBlacklist');

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
        }, secret);

        let refreshToken = jwt.sign({
            userId : user.id,
            refresh : true,
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) //1d
        }, secret);

        return { accessToken, refreshToken };    
    },

    grantNewTokens : async function(userToken) {

        let decoded;
        try {
            decoded = jwt.verify(userToken, secret)
        }
        catch(err) {
            throw(new Error('invalid token'));
        }
        
        if(!decoded.refresh)
            throw(new Error('invalid token'));

        if(await jwtBlacklist.has(userToken))
            throw(new Error('invalid token'));

        jwtBlacklist.add(userToken);
        
        let userId = decoded.userId;

        let accessToken = jwt.sign({
            userId : userId,
            refresh : false,
            exp: Math.floor(Date.now() / 1000) + (60 * 60) //1h
        }, secret);

        let refreshToken = jwt.sign({
            userId : userId,
            refresh : true,
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) //1d
        }, secret);

        return { accessToken, refreshToken };  

    }


}