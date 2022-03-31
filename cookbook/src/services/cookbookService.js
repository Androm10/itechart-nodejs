const cookbookRepository = require('../repository/cookbookRepository');
const viewService = require('./viewService');

module.exports = {

    addCookbook : async function(data) {
        return await cookbookRepository.addCookbook(data);
    },

    getById : async function(userId, cookbookId) {

        let cookbook = await cookbookRepository.getById(cookbookId);

        viewService.addViewToCookbook(userId, cookbookId);

        return cookbook;

    },

    getAll : async function(filter) {
        return await cookbookRepository.getAll(filter);
    },

    deleteById : async function(cookbookId) {
        return await cookbookRepository.deleteById(cookbookId);
    },

    updateById : async function(cookbookId, data) {
        return await cookbookRepository.updateById(cookbookId, data);
    },

    linkRecipe : async function(cookbookId, recipeId) {
        return await cookbookRepository.linkRecipe(cookbookId, recipeId);
    },

    unlinkRecipe : async function(cookbookId, recipeId) {
        return await cookbookRepository.unlinkRecipe(cookbookId, recipeId);
    },

    cloneCookbook : async function(userId, cookbookId) {

        let cookbook = await cookbookRepository.getById(cookbookId);

        let assignedRecipes = await cookbook.getRecipes();

        let cloned = {
            name : cookbook.name,
            description : cookbook.description,
            creatorId : userId
        }

        let newCookbook = await cookbookRepository.addCookbook(cloned);

        newCookbook.addRecipes(assignedRecipes.map((recipe) => {
            return {
                name : recipe.name,
                avatar : recipe.avatar,
                description : recipe.description,
                directions : recipe.directions,
                ingridients : recipe.ingridients,
                cookingTime : recipe.cookingTime,
                creatorId : userId
            }
        }));

        return newCookbook;
    },

    countAll : async function() {
        return await cookbookRepository.countAll();
    }

}