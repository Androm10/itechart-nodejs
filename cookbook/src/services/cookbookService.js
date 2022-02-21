const cookbookRepository = require('../repository/cookbookRepository');
const viewService = require('./viewService');

module.exports = {

    addCookbook : async function(data) {

        let cookbook = await cookbookRepository.addCookbook(data);
        return cookbook;

    },

    getById : async function(userId, cookbookId) {

        let cookbook = await cookbookRepository.getById(cookbookId);

        viewService.addViewToCookbook(userId, cookbookId);

        return cookbook;

    },

    getAll : async function(filter) {

        let cookbooks = await cookbookRepository.getAll(filter);

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

    linkRecipe : async function(cookbookId, recipeId) {

        let link = await cookbookRepository.linkRecipe(cookbookId, recipeId);

        return link;

    },

    unlinkRecipe : async function(cookbookId, recipeId) {

        let link = await cookbookRepository.unlinkRecipe(cookbookId, recipeId);

        return link;

    }

}