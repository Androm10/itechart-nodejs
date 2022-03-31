const commentRepository = require('../repository/commentRepository');


module.exports = {

    async addCommentToRecipe(userId, recipeId, content) {
        return await commentRepository.addCommentToRecipe(userId, recipeId, content);
    }, 

    async addCommentToCookbook(userId, cookbookId, content) {
        return await commentRepository.addCommentToCookbook(userId, cookbookId, content);
    }, 

    async getCommentToRecipeById(commentId) {
        return await commentRepository.getCommentToRecipeById(commentId);
    },

    async getCommentToCookbookById(commentId) {
        return await commentRepository.getCommentToCookbookById(commentId);
    },

    async deleteCommentFromRecipe(userId, commentId ) {
        return await commentRepository.deleteCommentFromRecipe(userId, commentId);
    },

    async deleteCommentFromCookbook(userId, commentId) {
        return await commentRepository.deleteCommentFromCookbook(userId, commentId);
    },


    async updateCommentToRecipeById(userId, recipeId, content) {
        return commentRepository.updateCommentToRecipeById(userId, recipeId, content);
    }, 

    async updateCommentToCookbookById(userId, cookbookId, content) {
        return await commentRepository.updateCommentToCookbookById(userId, cookbookId, content);
    }, 

}