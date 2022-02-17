const models = require('../database').models;


module.exports = {

    async addLikeToRecipe(userId, recipeId) {

        let user = await models.user.findByPk(userId);

        if(!user)
            throw(new Error('no such user'));

        let recipe = await models.recipe.findByPk(recipeId);

        if(!recipe)
            throw(new Error('no such recipe'));

        let like = await user.createRecipeLike(recipe);

        return like;

    }, 

    async addLikeToCookbook(userId, cookbookId) {

        let user = await models.user.findByPk(userId);

        if(!user)
            throw(new Error('no such user'));

        let cookbook = await models.cookbook.findByPk(cookbookId);

        if(!cookbook)
            throw(new Error('no such cookbook'));

        let like = await user.createCookbookLike(cookbook);

        return like;
       
    }, 

    async deleteLikeFromRecipe(userId, recipeId) {

        let like = await models.recipeLike.findOne({ where : {recipeId, userId}});

        if(!like)
            throw(new Error('no such like'));

        like.destroy();

        return like;
  
    },

    async deleteLikeFromCookbook(userId, cookbookId) {

        let like = await models.cookbookLike.findOne({ where : {cookbookId, userId}});

        if(!like)
            throw(new Error('no such like'));

        like.destroy();

        return like;
    
    },

}