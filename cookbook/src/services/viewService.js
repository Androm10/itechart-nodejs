const viewRepository = require('../repository/viewRepository');


module.exports = {

    async addViewToRecipe(userId, recipeId) {
        return await viewRepository.addViewToRecipe(userId, recipeId);
    }, 

    async addViewToCookbook(userId, cookbookId) {
        return await viewRepository.addViewToCookbook(userId, cookbookId);
    }, 

    async deleteViewFromRecipe(userId, recipeId) {
        return await viewRepository.deleteViewFromRecipe(userId, recipeId);
    },

    async deleteViewFromCookbook(userId, cookbookId) {
        return await viewRepository.deleteViewFromCookbook(userId, cookbookId);
    },

    async getViews(modelName, id = 1) {
        return await viewRepository.getViews(modelName, id);
    }

}