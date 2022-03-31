const { Op } = require('sequelize');
const sequelize = require('../database');
const ResponseError = require('../utils/ResponseError');

const models = require('../database').models;

module.exports = {
    
    addRecipe : async function(data) {

        let recipe = await models.recipe.findOne( {where : { name: data.name}}) ;

        if(recipe)
            throw new ResponseError('recipe with such name already exists', 404);

        return await models.recipe.create(data);

    },

    getById : async function(recipeId) {

        let recipe = await models.recipe.findByPk(recipeId);

        if(!recipe)
            throw new ResponseError('no such recipe', 404);


        return recipe;

    },

    getAll : async function(filter) {

        let options = { where: { cookingTime : {} } };

        if(filter.cookingTimeFrom != 'any')
            options.where.cookingTime[Op.gte] = filter.cookingTimeFrom;

        if(filter.cookingTimeTo != 'any')
            options.where.cookingTime[Op.lte] = filter.cookingTimeTo;
        
       switch( filter.sort) {
           case 'popularity' : {
               options.attributes = ['id', 'name', 'avatar', 'description', 'directions', 'ingridients', 'cookingTime', 'creatorId'];
               options.include = { model: models.recipeView, attributes : [] };
               options.order = [
                   sequelize.literal('COUNT(recipeViews.id) DESC')
               ];
               options.group = 'id';
               break;
           } 
           case 'likes' : {
               options.attributes = ['id', 'name', 'avatar', 'description', 'directions', 'ingridients', 'cookingTime', 'creatorId'];
               options.include = {model: models.recipeLike, attributes : []};
               options.order = [
                   sequelize.literal('COUNT(recipeLikes.id) DESC')
               ];
               options.group = 'id';
               break;
           }
           default : {}
       }
        
        
        let recipes = await models.recipe.findAll(options);
        
        return recipes;

    },

    deleteById : async function(recipeId) {

        let recipe = await models.recipe.findByPk(recipeId);

        if(!recipe)
            throw new ResponseError('no such recipe', 404) ;

        recipe.destroy();
        return recipe;

    },

    updateById : async function(recipeId, data) {

        let recipe = await models.recipe.findByPk(recipeId);

        if(!recipe)
            throw new ResponseError('no such recipe', 404) ;

        await recipe.update(data);
        
        return recipe;

    },

    countAll : async function() {

        let count = await models.recipe.findAll({
            attributes : [[sequelize.fn('COUNT', sequelize.col('id')), 'recipes']]
        })

        return count;
    }



}