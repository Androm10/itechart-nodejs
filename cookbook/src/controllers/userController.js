const userService = require('../services/userService');


module.exports = {

    updateProfile : async function(req, res, next) {
    
        let profile = {
            username : req.body.username,
            info : req.body.info
        }

        let response = await userService.updateProfile(req.user.id, profile);

        res.status(201).json({ type: 'success', body: response});

    },

    changePassword : async function(req, res, next) {

        let passwords = {
            oldPassword : req.body.oldPassword,
            newPassword : req.body.newPassword
        }

        let response = await userService.changePassword(req.user.id, passwords);

        res.status(201).json({ type: 'success', body: response});

    }

}