const models = require('../database').models;

module.exports = {

    addRecipe : async function(data) {

        let recipe = await models.recipe.findOne( {where : { name: data.name}}) ;

        if(recipe)
            throw(new Error('recipe with such name already exists'));

        return await models.recipe.create(data);

    },

    getById : async function(recipeId) {

        let recipe = await models.recipe.findByPk(recipeId);

        if(!recipe)
            throw(new Error('no such recipe'));


        return recipe;

    },

    getAll : async function() {

        let recipes = await models.recipe.findAll();
        return recipes;

    },

    deleteById : async function(recipeId) {

        let recipe = await models.recipe.findByPk(recipeId);

        if(!recipe)
            throw(new Error('no such recipe'));

        recipe.destroy();
        return recipe;

    },

    updateById : async function(recipeId, data) {

        let recipe = await models.recipe.findByPk(recipeId);

        if(!recipe)
            throw(new Error('no such recipe'));

        await recipe.update(data);
        
        return recipe;

    },



}