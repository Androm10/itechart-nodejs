const recipeRepository = require('../repository/recipeRepository');
const viewService = require('./viewService');

module.exports = {

    addRecipe : async function(data) {

        let recipe = await recipeRepository.addRecipe(data);
        return recipe;

    },

    getById : async function(userId, recipeId) {

        let recipe = await recipeRepository.getById(recipeId);
        
        viewService.addViewToRecipe(userId, recipeId);

        return recipe;

    },

    getAll : async function(filter) {

        let recipes = await recipeRepository.getAll(filter);
        return recipes;

    },

    deleteById : async function(recipeId) {

        let recipe = await recipeRepository.deleteById(recipeId);
        return recipe;

    },

    updateById : async function(recipeId, data) {

        let recipe = await recipeRepository.updateById(recipeId, data);
        return recipe;

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
    }


}