const fileworker = require('../filework');
const cardPath = require('../config').databasePath + '/card.json';

const cardController = {
    
    async create(req, res) {
        
    
        let card = await fileworker.create(cardPath, req.body);

        res.status(200).json({type: "success", body : card});

    },

    async getAll(req, res) {
        
        let cards = await fileworker.getAll(cardPath);

        res.status(200).json({type: "success", body : cards});

    },

    async getById(req, res) {

        let card = await fileworker.getById(cardPath, req.params.id);

        res.status(200).json({type: "success", body : card});

    },

    async deleteById(req, res) {

        let card = await fileworker.deleteById(cardPath, req.params.id);

        res.status(200).json({type: "success", body : card});

    },

    async updateById(req, res) {

        let card = await fileworker.updateById(cardPath, req.params.id, req.body);

        res.status(200).json({type: "success", body : card});

    }


}

module.exports = cardController;