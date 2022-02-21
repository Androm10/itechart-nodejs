const { Op } = require('sequelize');
const sequelize = require('../database');


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

    getAll : async function(filter) {

        let options = { where: { cookingTime : {} } };

        if(filter.cookingTimeFrom != 'any')
            options.where.cookingTime[Op.gte] = filter.cookingTimeFrom;

        if(filter.cookingTimeTo != 'any')
            options.where.cookingTime[Op.lte] = filter.cookingTimeTo;
        
        // if(filter.sort != 'none') {
        //     switch( filter.sort) {
        //         case 'popularity' : {
        //             options.include = models.recipeView;
        //             options.order = [
        //                 ['recipeView', sequelize.fn('count', sequelize.col('id'))]
        //             ]
        //             break;
        //         } 
        //         case 'likes' : {
        //             options.attributes = ['id', 'name', 'avatar', 'description', 'directions', 'ingridients', 'cookingTime'];
        //             options.include = {model: models.recipeLike, attributes : []};
        //             options.order = [
        //                 //[models.recipeLike, sequelize.fn('max', sequelize.col('id'))]
        //                 sequelize.literal('COUNT(recipeLikes.id) DESC')
        //             ]
        //             break;
        //         }
        //         default : {}
        //     }
        // } 
        
        
        let recipes = await models.recipe.findAll(options);
        
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