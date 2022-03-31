const viewService = require('../services/viewService');


module.exports = {

    async getViewsOnCookbook(req, res, next) {

        let response = await viewService.getViewsOnCookbook('cookbook', req.params.id);

        res.status(201).json(response);
    },

    async getViewsOnRecipe(req, res, next) {

        let response = await viewService.getViews('recipe', req.params.id);

        res.status(201).json(response);
    }

}