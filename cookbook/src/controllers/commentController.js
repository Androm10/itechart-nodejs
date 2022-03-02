const commentService = require('../services/commentService');


module.exports = {

    async addCommentToRecipe(req, res, next) {

        let comment = {
            text : req.body.text,
            rate : req.body.rate,
            createdAt: Date.now()
        }

        let response = await commentService.addCommentToRecipe(req.user.id, req.params.id, comment);

        res.status(201).json(response);

    }, 

    async addCommentToCookbook(req, res, next) {

        let comment = {
            text : req.body.text,
            rate : req.body.rate,
            createdAt: Date.now()
        }

        let response = await commentService.addCommentToCookbook(req.user.id, req.params.id, comment);

        res.status(201).json(response);

    }, 


    async getCommentToRecipeById(req, res, next) {

        let response = await commentService.getCommentToRecipeById(req.params.id);

        res.status(200).json(response);

    },

    async getCommentToCookbookById(req, res, next) {

        let response = await commentService.getCommentToCookbookById(req.params.id);

        res.status(200).json(response);

    },


    async deleteCommentFromRecipe(req, res, next) {

        let response = await commentService.deleteCommentFromRecipe(req.user.id, req.params.id);

        res.status(200).json(response);

    },

    async deleteCommentFromCookbook(req, res, next) {

        let response = await commentService.deleteCommentFromCookbook(req.user.id, req.params.id);

        res.status(200).json(response);
    },

    async updateCommentToRecipeById(req, res, next) {
        
        let comment = {
            text : req.body.text,
            rate : req.body.rate
        }

        let response = await commentService.updateCommentToRecipeById(req.user.id, req.params.id, comment);

        res.status(200).json(response);

    },

    async updateCommentToCookbookById(req, res, next) {
        
        let comment = {
            text : req.body.text,
            rate : req.body.rate
        }

        let response = await commentService.updateCommentToCookbookById(req.user.id, req.params.id, comment);

        res.status(200).json(response);

    }

}