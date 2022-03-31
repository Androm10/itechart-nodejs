const sequelize = require('../database');

const models = sequelize.models;


module.exports = {

    async addViewToRecipe(userId, recipeId) {

        let user = await models.user.findByPk(userId);

        if(!user)
            throw new ResponseError('no such user', 404);

        let recipe = await models.recipe.findByPk(recipeId);

        if(!recipe)
            throw new ResponseError('no such recipe', 404);

        let view = await models.recipeView.create({ userId: user.id, recipeId : recipe.id});

        return view;

    }, 

    async addViewToCookbook(userId, cookbookId) {

        let user = await models.user.findByPk(userId);

        if(!user)
            throw new ResponseError('no such user', 404);

        let cookbook = await models.cookbook.findByPk(cookbookId);

        if(!cookbook)
            throw new ResponseError('no such cookbook', 404);

        let view = await models.cookbookView.create({ userId: user.id, cookbookId : cookbook.id});

        return view;
       
    }, 

    async deleteViewFromRecipe(userId, recipeId) {

        let view = await models.recipeView.findOne({ where : {recipeId, userId}});

        if(!view)
            throw new ResponseError('no such view', 404);

        view.destroy();

        return view;
  
    },

    async deleteViewFromCookbook(userId, cookbookId) {

        let view = await models.cookbookView.findOne({ where : {cookbookId, userId}});

        if(!view)
            throw new ResponseError('no such view', 404);

        view.destroy();

        return view;
    
    },

    async getViews(modelName, id) {

        let views = await models[modelName + 'View'].findAll({
            attributes: ['id', [sequelize.fn('COUNT', sequelize.col('id')), 'views'] ],
            where : {
                id : id
            }
        });

        return views;
    }

}