const boardService = require('../services/boardService');

const boardController = {
    
    async create(req, res) {
        
    
        let board = await boardService.create(req.body);

        res.status(200).json({type: "success", body : board});

    },

    async getAll(req, res) {
        
        let boards = await boardService.getAll();

        res.status(200).json({type: "success", body : boards});

    },

    async getById(req, res) {

        let board = await boardService.getById(req.params.id);

        res.status(200).json({type: "success", body : board});

    },

    async deleteById(req, res) {

        let board = await boardService.deleteById(req.params.id);

        res.status(200).json({type: "success", body : board});

    },

    async updateById(req, res) {

        let board = await boardService.updateById(req.params.id, req.body);

        res.status(200).json({type: "success", body : board});

    }


}

module.exports = boardController;