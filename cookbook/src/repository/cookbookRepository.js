const { Op } = require('sequelize');
const sequelize = require('../database');

const models = require('../database').models;

module.exports = {

    addCookbook : async function(data) {

        return await models.cookbook.create(data);

    },

    getById : async function(cookbookId) {

        let cookbook = await models.cookbook.findByPk(cookbookId);
        
        if(!cookbook)
            throw new ResponseError('no such cookbook', 404);

        return cookbook;

    },

    getAll : async function(filter) {

        let options = { where: {} };

        switch( filter.sort) {
            case 'popularity' : {
                options.attributes = ['id', 'name', 'avatar', 'description', 'creatorId'];
                options.include = {model: models.cookbookView, attributes: []};
                options.order = [
                    sequelize.literal('COUNT(cookbookViews.id) DESC')
                ];
                options.group = 'id';
                break;
            } 
            case 'likes' : {
                options.attributes = ['id', 'name', 'avatar', 'description', 'creatorId'];
                options.include = {model: models.cookbookLike, attributes: []};
                options.order = [
                    sequelize.literal('COUNT(cookbookLikes.id) DESC')
                ];
                options.group = 'id';
                break;
            }
            default : {}
        }


        if(filter.type != 'any') {

            options.where[Op.and] = [];
        
            filter.type.split(',').forEach( (item) => {

                options.where[Op.and].push({ 
                    description : {
                        [Op.like] : `%${item}%`
                    }
                })

            });

        }

        let cookbooks = await models.cookbook.findAll(options);
        
        return cookbooks;

    },

    deleteById : async function(cookbookId) {

        let cookbook = await models.cookbook.findByPk(cookbookId);

        if(!cookbook)
            throw new ResponseError('no such cookbook', 404);

        cookbook.destroy();

        return cookbook;

    },

    updateById : async function(cookbookId, data) {

        let cookbook = await models.cookbook.findByPk(cookbookId);

        if(!cookbook)
            throw new ResponseError('no such cookbook', 404);

        await cookbook.update(data);
        
        return cookbook;

    },

    linkRecipe : async function(cookbookId, recipeId) {


        let existedLink = await models.cookbooksRecipes.findOne({where : {cookbookId, recipeId}});

        if(existedLink)
            throw new ResponseError('this recipe already added to the cookbook', 400);

        let cookbook = await models.cookbook.findByPk(cookbookId);

        if(!cookbook)
            throw new ResponseError('no such cookbook', 404);

        let recipe = await models.recipe.findByPk(recipeId);

        if(!recipe)
            throw new ResponseError('no such recipe', 404);

        return await models.cookbooksRecipes.create({ cookbookId, recipeId });

    },

    unlinkRecipe : async function(cookbookId, recipeId) {

        let link = await models.cookbooksRecipes.findOne({where : {cookbookId, recipeId}});

        if(!link)
            throw new ResponseError('no such link', 404);

        link.destroy();

        return link;

    },

    countAll : async function() {

        let count = await models.cookbook.findAll({
            attributes : [[sequelize.fn('COUNT', sequelize.col('id')), 'cookbooks']]
        })

        return count;
    }


}