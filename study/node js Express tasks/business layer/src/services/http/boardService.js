const ResponseError = require('../../utils/ResponseError.js');

let url = require('../../config.js').DALayerUrl;

let axios = require('axios').create({
    baseURL : url,
    timeout : 6000,
});

let boardService = {

    async create(boardInfo) {
        
        let board = (await axios.post('board/', boardInfo)).data.body;
        
        if(!board)
            throw new ResponseError('cannot create board', 400);

        return board;
    },

    async getAll() {

        let boards = (await axios.get('board/')).data.body;
        
        return boards;

    },

    async getById(boardId) {

        let board = (await axios.get('board/' + boardId)).data.body;
        
        if(!board)
            throw new ResponseError('no such board', 404);

        return board;

    },

    async deleteById(boardId) {

        let board = (await axios.delete('board/' + boardId)).data.body;
        
        if(!board)
            throw new ResponseError('no such board', 404);

        return board;

    },

    async updateById(boardId, boardInfo) {

        let board = (await axios.put('board/' + boardId, boardInfo)).data.body;
        
        if(!board)
            throw new ResponseError('no such board', 404);

        return board;

    }

}




module.exports = boardService;