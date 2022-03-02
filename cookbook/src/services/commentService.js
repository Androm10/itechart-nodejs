const commentRepository = require('../repository/commentRepository');


module.exports = {

    async addCommentToRecipe(userId, recipeId, content) {

        let comment = await commentRepository.addCommentToRecipe(userId, recipeId, content);

        return comment;

    }, 

    async addCommentToCookbook(userId, cookbookId, content) {

        let comment = await commentRepository.addCommentToCookbook(userId, cookbookId, content);

        return comment;

    }, 

    async getCommentToRecipeById(commentId) {

        let comment = await commentRepository.getCommentToRecipeById(commentId);

        return comment;

    },

    async getCommentToCookbookById(commentId) {

        let comment = await commentRepository.getCommentToCookbookById(commentId);

        return comment;

    },

    async deleteCommentFromRecipe(userId, commentId ) {

        let comment = await commentRepository.deleteCommentFromRecipe(userId, commentId);

        return comment;
  
    },

    async deleteCommentFromCookbook(userId, commentId) {

        let comment = await commentRepository.deleteCommentFromCookbook(userId, commentId);

        return comment;
    
    },


    async updateCommentToRecipeById(userId, recipeId, content) {

        let comment = await commentRepository.updateCommentToRecipeById(userId, recipeId, content);

        return comment;

    }, 

    async updateCommentToCookbookById(userId, cookbookId, content) {

        let comment = await commentRepository.updateCommentToCookbookById(userId, cookbookId, content);

        return comment;

    }, 

}