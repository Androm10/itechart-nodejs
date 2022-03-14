const ResponseError = require('../../utils/ResponseError');

let url = require('../../config').DALayerUrl;

let axios = require('axios').create({
    baseURL : url,
    timeout : 6000,
    
});

let cardService = {

    async create(cardInfo) {
        
        let card = (await axios.post('card/', cardInfo)).data.body;
        
        if(!card)
            throw new ResponseError('cannot create card', 400);

        return card;
    },

    async getAll() {

        let cards = (await axios.get('card/')).data.body;
        
        return cards;

    },

    async getById(cardId) {

        let card = (await axios.get('card/' + cardId)).data.body;
        
        if(!card)
            throw new ResponseError('no such card', 404);

        return card;

    },

    async deleteById(cardId) {

        let card = (await axios.delete('card/' + cardId)).data.body;
        
        if(!card)
            throw new ResponseError('no such card', 404);

        return card;

    },

    async updateById(cardId, cardInfo) {

        let card = (await axios.put('card/' + cardId, cardInfo)).data.body;
        
        if(!card)
            throw new ResponseError('no such card', 404);

        return card;

    }

}




module.exports = cardService;