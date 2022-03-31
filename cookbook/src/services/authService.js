let secret = require('../config').secret;
let crypt = require('../utils/crypt');
let jwt = require('jsonwebtoken');
let uuid = require('uuid').v4;

const userRepository = require('../repository/userRepository');
const jwtBlacklist = require('../utils/jwtBlacklist');
const resetTokenManager = require('../utils/resetTokenManager');
const amqp = require('../amqp');
const config = require('../config');
const ResponseError = require('../utils/ResponseError');

module.exports = {

    login : async function(instance) {
        let user = await userRepository.getByLogin(instance.login);
        if(!user)
            throw new ResponseError('Login or password is incorrect', 400);
        
        if(!crypt.comparePassword(instance.password, user.password))
            throw new ResponseError('Login or password is incorrect', 400 );


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
            throw(new ResponseError('invalid token', 400));
        }
        
        if(!decoded.refresh || await jwtBlacklist.has(userToken))
            throw(new ResponseError('invalid token', 400));

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

    },


    resetPasswordRequest : async function(login) {

        let user = await userRepository.getByLogin(login);

        if(!user)
            throw new ResponseError('No user with provided login was found', 404);

        let resetToken = {
            user : login,
            token : uuid()
        }

        await resetTokenManager.addToken(resetToken);

        let mail = {
            type: 'resetPassword',
            to: login,
            context : {
                name: login,
                link: `http://${config.server.host}:3000/resetPassword/{${resetToken.token}}`
            }
        }

        amqp.sendToMailer(JSON.stringify(mail));

        return true;
    },

    async resetPassword(uuid, newPassword) {

        let token = await resetTokenManager.getByUUID(id);

        if(!token) 
            throw new ResponseError('invalid token', 400);
        
        
        let hashedPassword = await crypt.cryptPassword(newPassword);
        
        let user = await userRepository.getByLogin(token.user);
        await user.update({ password :  hashedPassword});
        
        return user;
    }

}