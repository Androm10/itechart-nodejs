const models = require('../database').models;


module.exports = {

    async addLikeToRecipe(userId, recipeId) {

        let existedLike = await models.recipeLike.findOne({where : {userId, recipeId}});

        if(existedLike)
            throw new ResponseError('already have like on this recipe', 400) ;

        let user = await models.user.findByPk(userId);

        if(!user)
            throw new ResponseError('no such user', 404) ;

        let recipe = await models.recipe.findByPk(recipeId);

        if(!recipe)
            throw new ResponseError('no such recipe', 404) ;

        let like = await models.recipeLike.create({userId : user.id, recipeId : recipe.id});
        return like;

    }, 

    async addLikeToCookbook(userId, cookbookId) {

        let existedLike = await models.cookbookLike.findOne({where : {userId, cookbookId}});

        if(existedLike)
            throw new ResponseError('already have like on this cookbook', 400) ;

        let user = await models.user.findByPk(userId);

        if(!user)
            throw new ResponseError('no such user', 404) ;

        let cookbook = await models.cookbook.findByPk(cookbookId);

        if(!cookbook)
            throw new ResponseError('no such cookbook', 404);

        let like = await models.cookbookLike.create({userId : user.id, cookbookId : cookbook.id});

        return like;
       
    }, 

    async deleteLikeFromRecipe(userId, recipeId) {

        let like = await models.recipeLike.findOne({ where : {recipeId, userId}});

        if(!like)
            throw new ResponseError('no such like', 404) ;

        like.destroy();

        return like;
  
    },

    async deleteLikeFromCookbook(userId, cookbookId) {

        let like = await models.cookbookLike.findOne({ where : {cookbookId, userId}});

        if(!like)
            throw new ResponseError('no such like', 404) ;

        like.destroy();

        return like;
    
    },

}