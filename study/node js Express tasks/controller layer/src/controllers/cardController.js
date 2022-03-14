const cardService = require('../services/cardService');

const cardController = {
    
    async create(req, res) {
        
        let data = {
            name : req.body.name,
            description : req.body.description,
            createAt : Date.now(),
            estimate : req.body.estimate,
            status : req.body.status,
            dueDate : req.body.dueDate,
            labels : req.body.labels 
        }

        let card = await cardService.create(data);

        res.status(200).json({type: "success", body : card});

    },

    async getAll(req, res) {
        
        let cards = await cardService.getAll();

        res.status(200).json({type: "success", body : cards});

    },

    async getById(req, res) {

        let card = await cardService.getById(req.params.id);

        res.status(200).json({type: "success", body : card});

    },

    async deleteById(req, res) {

        let card = await cardService.deleteById(req.params.id);

        res.status(200).json({type: "success", body : card});

    },

    async updateById(req, res) {

        let data = {
            name : req.body.name,
            description : req.body.description,
            createAt : req.body.createAt,
            estimate : req.body.estimate,
            status : req.body.status,
            dueDate : req.body.dueDate,
            labels : req.body.labels 
        }

        let card = await cardService.updateById(req.params.id, data);

        res.status(200).json({type: "success", body : card});

    }


}

module.exports = cardController;