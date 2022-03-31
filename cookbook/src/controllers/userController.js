const userService = require('../services/userService');
const ResponseError = require('../utils/ResponseError');


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

    },

    updateStatus : async function(req, res ) {

        const statusList = ['delete', 'active', 'block'];
        let status = req.body.status;
        
        if(!statusList.includes(status))
            throw new ResponseError('invalid status', 400);

        let response = await userService.updateStatus(req.params.id, status);

        res.status(201).json({ type: 'success', body: response});
    },

    getStatusStats : async function(req, res) {

        let response = await userService.getStatusStats();

        res.status(201).json({ type: 'success', body: response});
    },

    mostActive : async function(req, res) {

        let response = await userService.mostActive();

        res.status(201).json({ type: 'success', body: response});
    }

}