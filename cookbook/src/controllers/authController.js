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
       
      
        let token = await authService.login(user);
        res.status(200).json(token);

    }

}