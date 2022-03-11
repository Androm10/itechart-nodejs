const fileworker = require('../filework');
const boardPath = require('../config').databasePath + '/board.json';

const boardController = {
    
    async create(req, res) {
        
    
        let board = await fileworker.create(boardPath, req.body);

        res.status(200).json({type: "success", body : board});

    },

    async getAll(req, res) {
        
        let boards = await fileworker.getAll(boardPath);

        res.status(200).json({type: "success", body : boards});

    },

    async getById(req, res) {

        let board = await fileworker.getById(boardPath, req.params.id);

        res.status(200).json({type: "success", body : board});

    },

    async deleteById(req, res) {

        let board = await fileworker.deleteById(boardPath, req.params.id);

        res.status(200).json({type: "success", body : board});

    },

    async updateById(req, res) {

        let board = await fileworker.updateById(boardPath, req.params.id, req.body);

        res.status(200).json({type: "success", body : board});

    }


}

module.exports = boardController;