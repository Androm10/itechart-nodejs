const recipeRepository = require('../repository/recipeRepository');
const viewService = require('./viewService');

module.exports = {

    addRecipe : async function(data) {
        return await recipeRepository.addRecipe(data);
    },

    getById : async function(userId, recipeId) {

        let recipe = await recipeRepository.getById(recipeId);
        
        viewService.addViewToRecipe(userId, recipeId);

        return recipe;
    },

    getAll : async function(filter) {
        return await recipeRepository.getAll(filter);
    },

    deleteById : async function(recipeId) {
        return await recipeRepository.deleteById(recipeId);
    },

    updateById : async function(recipeId, data) {
        return await recipeRepository.updateById(recipeId, data);
    },

    cloneRecipe : async function(userId, recipeId) {

        let recipe = await recipeRepository.getById(recipeId);

        let cloned = {
            name : recipe.name,
            description : recipe.description,
            directions : recipe.directions,
            ingridients : recipe.ingridients,
            cookingTime : recipe.cookingTime,
            creatorId : userId
        }

        let result = await recipeRepository.addRecipe(cloned);

        return result;
    },

    countAll : async function() {
        return await recipeRepository.countAll();
    }

}