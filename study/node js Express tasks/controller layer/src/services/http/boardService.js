let axios = require('axios').default;
let url = require('../../config.json')['business-layer-url'];

let boardService = {

    async create(boardInfo) {
        
        let board = await axios.post(url + 'board/', boardInfo);
        
        if(!board)
            throw new Error('cannot create board');

        return board;
    },

    async getAll() {

        let boards = await axios.get(url + 'board/');
        
        return boards;

    },

    async getById(boardId) {

        let board = await axios.get(url + 'board/' + boardId);
        
        if(!board)
            throw new Error('no such board');

        return board;

    },

    async deleteById(boardId) {

        let board = await axios.delete(url + 'board/' + boardId);
        
        if(!board)
            throw new Error('no such board');

        return board;

    },

    async updateById(boardId, boardInfo) {

        let board = await axios.put(url + 'board/' + boardId, boardInfo);
        
        if(!board)
            throw new Error('no such board');

        return board;

    }

}




module.exports = boardService;