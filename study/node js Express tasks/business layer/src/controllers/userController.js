const userService = require('../services/userService');

const userController = {
    
    async create(req, res) {
         
        let user = await userService.create(req.body);

        res.status(200).json({type: "success", body : user});

    },

    async getAll(req, res) {
        
        let users = await userService.getAll(req.query);

        res.status(200).json({type: "success", body : users});

    },

    async getById(req, res) {

        let user = await userService.getById(req.params.id);

        res.status(200).json({type: "success", body : user});

    },

    


}

module.exports = userController;