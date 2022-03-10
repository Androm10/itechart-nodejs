let url = require('../../config').businessLayerUrl;

let axios = require('axios').create({
    baseURL : url,
    timeout : 1000,
    
});

let cardService = {

    async create(cardInfo) {
        
        let card = await axios.post('card/', cardInfo).data.body;
        
        if(!card)
            throw new Error('cannot create card');

        return card;
    },

    async getAll() {

        let cards = await axios.get('card/').data.body;
        
        return cards;

    },

    async getById(cardId) {

        let card = await axios.get('card/' + cardId).data.body;
        
        if(!card)
            throw new Error('no such card');

        return card;

    },

    async deleteById(cardId) {

        let card = await axios.delete('card/' + cardId).data.body;
        
        if(!card)
            throw new Error('no such card');

        return card;

    },

    async updateById(cardId, cardInfo) {

        let card = await axios.put('card/' + cardId, cardInfo).data.body;
        
        if(!card)
            throw new Error('no such card');

        return card;

    }

}




module.exports = cardService;