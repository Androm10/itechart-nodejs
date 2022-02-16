const cookbookRepository = require('../repository/cookbookRepository');

module.exports = {

    addCookbook : async function(data) {

        let cookbook = await cookbookRepository.addCookbook(data);
        return cookbook;

    },

    getById : async function(cookbookId) {

        let cookbook = await cookbookRepository.getById(cookbookId);
        return cookbook;

    },

    getAll : async function() {

        let cookbooks = await cookbookRepository.getAll();
        return cookbooks;

    },

    deleteById : async function(cookbookId) {

        let cookbook = await cookbookRepository.deleteById(cookbookId);
        return cookbook;

    },

    updateById : async function(cookbookId, data) {

        let cookbook = await cookbookRepository.updateById(cookbookId, data);
        return cookbook;

    },



}