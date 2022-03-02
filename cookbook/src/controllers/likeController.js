const likeService = require('../services/likeService');


module.exports = {

    async addLikeToRecipe(req, res, next) {

        let response = await likeService.addLikeToRecipe(req.user.id, req.params.id);

        res.status(201).json(response);

    }, 

    async addLikeToCookbook(req, res, next) {

        let response = await likeService.addLikeToCookbook(req.user.id, req.params.id);

        res.status(201).json(response);

    }, 

    async deleteLikeFromRecipe(req, res, next) {

        let response = await likeService.deleteLikeFromRecipe(req.user.id, req.params.id);

        res.status(200).json(response);

    },

    async deleteLikeFromCookbook(req, res, next) {

        let response = await likeService.deleteLikeFromCookbook(req.user.id, req.params.id);

        res.status(200).json(response);
    },

}