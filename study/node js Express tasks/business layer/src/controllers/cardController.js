const cardService = require('../services/cardService');

const cardController = {
    
    async create(req, res) {
        
        let card = await cardService.create(req.body);

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


        let card = await cardService.updateById(req.params.id, req.body);

        res.status(200).json({type: "success", body : card});

    }


}

module.exports = cardController;