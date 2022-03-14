const boardService = require('../services/boardService');

const boardController = {
    
    async create(req, res) {
        
        let data = {
            name : req.body.name,
            color : req.body.color,
            description : req.body.description,
            createAt : Date.now(),
        }

        let board = await boardService.create(data);

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

        let data = {
            name : req.body.name,
            color : req.body.color,
            description : req.body.description,
            createAt : req.body.createAt,

        }

        let board = await boardService.updateById(req.params.id, data);

        res.status(200).json({type: "success", body : board});

    }


}

module.exports = boardController;