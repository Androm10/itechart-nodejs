const likeRepository = require('../repository/likeRepository');


module.exports = {

    async addLikeToRecipe(userId, recipeId) {
        return await likeRepository.addLikeToRecipe(userId, recipeId);
    }, 

    async addLikeToCookbook(userId, cookbookId) {
        return await likeRepository.addLikeToCookbook(userId, cookbookId);
    }, 

    async deleteLikeFromRecipe(userId, recipeId) {
        return await likeRepository.deleteLikeFromRecipe(userId, recipeId);
    },

    async deleteLikeFromCookbook(userId, cookbookId) {
        return await likeRepository.deleteLikeFromCookbook(userId, cookbookId);
    },

}