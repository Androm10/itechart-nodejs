const userService = require('../services/userService');
const authService = require('../services/authService');

module.exports = {

    signup : async function (req, res, next) {


        let user = {
            login : req.body.login,
            password : req.body.password,
            username : req.body.username
        }

        let response = await userService.addUser(user);
        res.status(201).json({ type: 'success', body: response});

    },

    login : async function(req, res, next) {

       if(!req.body.login || !req.body.password)
           throw(new Error('fill the fields'));
    
       let user = {
           login : req.body.login,
           password : req.body.password
        }
       
      
        let tokens = await authService.login(user);
        res.status(200).json(tokens);

    },

    grantNewTokens : async function(req, res, next) {


        if(!req.body.refreshToken)
            throw(new Error('invalid token'))

        let tokens = await authService.grantNewTokens(req.body.refreshToken);

        res.status(200).json(tokens);

    },

    resetPasswordRequest : async function(req, res, next) {

        let response = await authService.resetPasswordRequest(req.body.email);

        res.status(201).json({ type: 'success', body: response});

    },

    resetPassword : async function(req, res, next) {

        console.log(req.params.uuid);

        let response = await authService.resetPassword(req.params.uuid, req.body.newPassword);

        res.status(201).json({ type: 'success', body: response});

    }

}