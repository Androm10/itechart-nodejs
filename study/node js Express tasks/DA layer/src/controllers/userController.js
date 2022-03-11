const fileworker = require('../filework');
const userPath = require('../config').databasePath + '/user.json';


const userController = {
    
    async create(req, res) {
         
        let user = await fileworker.create(userPath, req.body);

        res.status(200).json({type: "success", body : user});

    },

    async getAll(req, res) {
        
        let users = await fileworker.getAll(userPath);

        res.status(200).json({type: "success", body : users});

    },

    async getById(req, res) {

        let user = await fileworker.getById(userPath, req.params.id);

        res.status(200).json({type: "success", body : user});

    },

    


}

module.exports = userController;