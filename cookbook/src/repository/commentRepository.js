const models = require('../database').models;


module.exports = {

    async addCommentToRecipe(userId, recipeId, content) {

        let user = await models.user.findByPk(userId);

        if(!user)
            throw(new Error('no such user'));

        let recipe = await models.recipe.findByPk(recipeId);

        if(!recipe)
            throw(new Error('no such recipe'));

        let comment = await models.recipeComment.create({userId, recipeId, ...content});
        return comment;

    }, 

    async addCommentToCookbook(userId, cookbookId, content) {

        let user = await models.user.findByPk(userId);

        if(!user)
            throw(new Error('no such user'));

        let cookbook = await models.cookbook.findByPk(cookbookId);

        if(!cookbook)
            throw(new Error('no such cookbook'));

        let comment = await models.cookbookComment.create({userId, cookbookId, ...content});

        return comment;
       
    }, 

    async getCommentToRecipeById(commentId) {
        
        let comment = await models.recipeComment.findByPk(commentId);

        if(!comment)
            throw(new Error('no such comment'));

        return comment

    },

    async getCommentToCookbookById(commentId) {
        
        let comment = await models.cookbookComment.findByPk(commentId);

        if(!comment)
            throw(new Error('no such comment'));

        return comment

    },

    async deleteCommentFromRecipe(userId, id) {

        let comment = await models.recipeComment.findOne({ where : {userId, id}});

        if(!comment)
            throw(new Error('no such comment'));

        comment.destroy();

        return comment;
  
    },

    async deleteCommentFromCookbook(userId, id) {

        let comment = await models.cookbookComment.findOne({ where : {userId, id}});

        if(!comment)
            throw(new Error('no such comment'));

        comment.destroy();

        return comment;
    
    },

    async updateCommentToRecipeById(userId, commentId, content) {

        let user = await models.user.findByPk(userId);

        if(!user)
            throw(new Error('no such user'));

        let comment = await models.recipeComment.findByPk(commentId);

        if(!comment)
            throw(new Error('no such comment'));

        await comment.update({...content});
        
        return comment;

    }, 

    async updateCommentToCookbookById(userId, commentId, content) {

        let user = await models.user.findByPk(userId);

        if(!user)
            throw(new Error('no such user'));

        let comment = await models.cookbookComment.findByPk(commentId);

        if(!comment)
            throw(new Error('no such comment'));

        await comment.update({...content});

        return comment;
       
    }, 

}