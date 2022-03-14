const ResponseError = require('../../utils/responseError');

let url = require('../../config').businessLayerUrl;

let axios = require('axios').create({
    baseURL : url,
    timeout : 6000,
    validateStatus: function (status) {
        return (status >= 200 && status < 300) || status >= 400 && status < 500; 
      },
    
});

let cardService = {

    async create(cardInfo) {
        
        let res = (await axios.post('card/', cardInfo));

        if(res.data.type == 'error')
            throw new ResponseError('cannot create card', res.status);

        return res.data.body;
    },

    async getAll() {

        let cards = (await axios.get('card/')).data.body;
        
        return cards;

    },

    async getById(cardId) {

        let res = (await axios.get('card/' + cardId));
        
        if(res.data.type == 'error')
            throw new ResponseError('no such card', 404);

        return res.data.body;

    },

    async deleteById(cardId) {

        let res = (await axios.delete('card/' + cardId));
        
        if(res.data.type == 'error')
            throw new ResponseError('no such card', 404);

        return res.data.body;

    },

    async updateById(cardId, cardInfo) {

        let res = (await axios.put('card/' + cardId, cardInfo));
        
        if(res.data.type == 'error')
            throw new ResponseError('no such card', 404);

        return res.data.body;

    }

}




module.exports = cardService;