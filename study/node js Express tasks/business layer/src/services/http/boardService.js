let url = require('../../config.js').DALayerUrl;

let axios = require('axios').create({
    baseURL : url,
    timeout : 6000,
});

let boardService = {

    async create(boardInfo) {
        
        let board = await axios.post('board/', boardInfo).data.body;
        
        if(!board)
            throw new Error('cannot create board');

        return board;
    },

    async getAll() {

        let boards = await axios.get('board/').data.body;
        
        return boards;

    },

    async getById(boardId) {

        let board = await axios.get('board/' + boardId).data.body;
        
        if(!board)
            throw new Error('no such board');

        return board;

    },

    async deleteById(boardId) {

        let board = await axios.delete('board/' + boardId).data.body;
        
        if(!board)
            throw new Error('no such board');

        return board;

    },

    async updateById(boardId, boardInfo) {

        let board = await axios.put('board/' + boardId, boardInfo).data.body;
        
        if(!board)
            throw new Error('no such board');

        return board;

    }

}




module.exports = boardService;