const recipeRepository = require('../repository/recipeRepository');

module.exports = {

    addRecipe : async function(data) {

        let recipe = await recipeRepository.addRecipe(data);
        return recipe;

    },

    getById : async function(recipeId) {

        let recipe = await recipeRepository.getById(recipeId);
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