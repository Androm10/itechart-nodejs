const likeRepository = require('../repository/likeRepository');


module.exports = {

    async addLikeToRecipe(userId, recipeId) {

        let like = await likeRepository.addLikeToRecipe(userId, recipeId);

        return like;

    }, 

    async addLikeToCookbook(userId, cookbookId) {

        let like = await likeRepository.addLikeToCookbook(userId, cookbookId);

        return like;

    }, 

    async deleteLikeFromRecipe(userId, recipeId) {

        let like = await likeRepository.deleteLikeFromRecipe(userId, recipeId);

        return like;
  
    },

    async deleteLikeFromCookbook(userId, cookbookId) {

        let like = await likeRepository.deleteLikeFromCookbook(userId, cookbookId);

        return like;
    
    },

}