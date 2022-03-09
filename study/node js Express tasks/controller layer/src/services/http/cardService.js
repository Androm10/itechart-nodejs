let axios = require('axios').default;
let url = require('../../config.json')['business-layer-url'];

let cardService = {

    async create(cardInfo) {
        
        let card = await axios.post(url + 'card/', cardInfo);
        
        if(!card)
            throw new Error('cannot create card');

        return card;
    },

    async getAll() {

        let cards = await axios.get(url + 'card/');
        
        return cards;

    },

    async getById(cardId) {

        let card = await axios.get(url + 'card/' + cardId);
        
        if(!card)
            throw new Error('no such card');

        return card;

    },

    async deleteById(cardId) {

        let card = await axios.delete(url + 'card/' + cardId);
        
        if(!card)
            throw new Error('no such card');

        return card;

    },

    async updateById(cardId, cardInfo) {

        let card = await axios.put(url + 'card/' + cardId, cardInfo);
        
        if(!card)
            throw new Error('no such card');

        return card;

    }

}




module.exports = cardService;