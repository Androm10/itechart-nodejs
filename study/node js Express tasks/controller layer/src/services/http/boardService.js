const ResponseError = require('../../utils/responseError');

let url = require('../../config').businessLayerUrl;

let axios = require('axios').create({
    baseURL : url,
    timeout : 6000,
    validateStatus: function (status) {
        return (status >= 200 && status < 300) || status >= 400 && status < 500; 
      },
    
});

let boardService = {

    async create(boardInfo) {
        
        let res = (await axios.post('board/', boardInfo));

        if(res.data.type == 'error')
            throw new ResponseError('cannot create board', res.status);

        return res.data.body;
    },

    async getAll() {

        let boards = (await axios.get('board/')).data.body;
        
        return boards;

    },

    async getById(boardId) {

        let res = (await axios.get('board/' + boardId));
        
        if(res.data.type == 'error')
            throw new ResponseError('no such board', 404);

        return res.data.body;

    },

    async deleteById(boardId) {

        let res = (await axios.delete('board/' + boardId));
        
        if(res.data.type == 'error')
            throw new ResponseError('no such board', 404);

        return res.data.body;

    },

    async updateById(boardId, boardInfo) {

        let res = (await axios.put('board/' + boardId, boardInfo));
        
        if(res.data.type == 'error')
            throw new ResponseError('no such board', 404);

        return res.data.body;

    }

}




module.exports = boardService;