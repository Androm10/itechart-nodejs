const sortTypes = require('../config').sortTypes;
const recipeService = require('../services/recipeService');


module.exports = {

    addRecipe : async function(req, res, next) {
    
        let recipe = {
            name : req.body.name,
            description : req.body.description,
            directions: req.body.directions,
            ingridients: req.body.ingridients,
            cookingTime: req.body.cookingTime,
            creatorId : req.user.id
        }

        let response = await recipeService.addRecipe(recipe);

        res.status(201).json({ type: 'success', body: response});

    },

    getById : async function(req, res, next) {
        
        let response = await recipeService.getById(req.user.id, req.params.id);

        res.status(200).json({ type: 'success', body: response});

    },

    getAll : async function(req, res, next) {
        
        let filter = {
            sort : req.query['sort'] || "none",
            cookingTimeFrom : req.query.cookingTimeFrom || "any",
            cookingTimeTo : req.query.cookingTimeTo || "any"
        }

        if(filter.cookingTimeFrom < 0 )
            filter.cookingTimeFrom = 'any';
        
        if(filter.cookingTimeTo < 0)
            filter.cookingTimeTo = 'any';

        if(!sortTypes.includes(filter.sort))
            filter.sort = 'none';

        let response = await recipeService.getAll(filter);

        res.status(200).json({ type: 'success', body: response});

    },
    
    deleteById : async function(req, res, next) {
        

        let response = await recipeService.deleteById(req.params.id);

        res.status(200).json({ type: 'success', body: response});

    },
    
    updateById : async function(req, res, next) {
        
        let data = {
            name : req.body.name,
            description : req.body.description,
            directions: req.body.directions,
            ingridients: req.body.ingridients,
            cookingTime: req.body.cookingTime
        }

        let response = await recipeService.updateById(req.params.id, data);
        
        res.status(200).json({ type: 'success', body: response });
    },

    cloneRecipe : async function(req, res, next) {

        let response = await recipeService.cloneRecipe(req.user.id, req.params.id);

        res.status(200).json({ type: 'success', body: response });
    }

}