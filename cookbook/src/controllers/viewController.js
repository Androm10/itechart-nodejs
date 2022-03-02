const viewService = require('../services/viewService');


module.exports = {

    async addViewToRecipe(req, res, next) {

        let response = await viewService.addViewToRecipe(req.user.id, req.params.id);

        res.status(201).json(response);

    }, 

    async addViewToCookbook(req, res, next) {

        let response = await viewService.addViewToCookbook(req.user.id, req.params.id);

        res.status(201).json(response);

    }

}