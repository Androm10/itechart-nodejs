const authService = require('../services/authService');

const authController = {
    
    async signUp(req, res) {
        
        let user = {
            login : req.body.login,
            password : req.body.password,
            role : 'user'
        }

        let result = await authService.signUp(user);

        res.status(201).json({ type: 'success', body: result });
    },

    async logIn(req, res) {

        let user = {
            login : req.body.login,
            password : req.body.password,
        }
        
        let token = await authService.logIn(user);

        res.status(200).json({ type: 'success', body: token });

    },



}

module.exports = authController;