const viewRepository = require('../repository/viewRepository');


module.exports = {

    async addViewToRecipe(userId, recipeId) {

        let view = await viewRepository.addViewToRecipe(userId, recipeId);

        return view;

    }, 

    async addViewToCookbook(userId, cookbookId) {

        let view = await viewRepository.addViewToCookbook(userId, cookbookId);

        return view;

    }, 

    async deleteViewFromRecipe(userId, recipeId) {

        let view = await viewRepository.deleteViewFromRecipe(userId, recipeId);

        return view;
  
    },

    async deleteViewFromCookbook(userId, cookbookId) {

        let view = await viewRepository.deleteViewFromCookbook(userId, cookbookId);

        return view;
    
    },

}