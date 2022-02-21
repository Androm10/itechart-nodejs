const models = require('../database').models;


module.exports = {

    async addViewToRecipe(userId, recipeId) {

        let user = await models.user.findByPk(userId);

        if(!user)
            throw(new Error('no such user'));

        let recipe = await models.recipe.findByPk(recipeId);

        if(!recipe)
            throw(new Error('no such recipe'));

        let view = await models.recipeView.create({ userId: user.id, recipeId : recipe.id});

        return view;

    }, 

    async addViewToCookbook(userId, cookbookId) {

        let user = await models.user.findByPk(userId);

        if(!user)
            throw(new Error('no such user'));

        let cookbook = await models.cookbook.findByPk(cookbookId);

        if(!cookbook)
            throw(new Error('no such cookbook'));

        let view = await models.cookbookView.create({ userId: user.id, cookbookId : cookbook.id});

        return view;
       
    }, 

    async deleteViewFromRecipe(userId, recipeId) {

        let view = await models.recipeView.findOne({ where : {recipeId, userId}});

        if(!view)
            throw(new Error('no such view'));

        view.destroy();

        return view;
  
    },

    async deleteViewFromCookbook(userId, cookbookId) {

        let view = await models.cookbookView.findOne({ where : {cookbookId, userId}});

        if(!view)
            throw(new Error('no such view'));

        view.destroy();

        return view;
    
    },

}