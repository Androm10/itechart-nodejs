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

    getAll : async function() {

        let recipes = await recipeRepository.getAll();
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



}