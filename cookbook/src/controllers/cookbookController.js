
const cookbookService = require('../services/cookbookService');


module.exports = {

    addCookbook : async function(req, res, next) {
    
        let cookbook = {
            name : req.body.name,
            description : req.body.description,
        }

        let response = await cookbookService.addCookbook(cookbook);

        res.status(201).json({ type: 'success', body: response});

    },

    getById : async function(req, res, next) {
        
        let response = await cookbookService.getById(req.params.id);

        res.status(200).json({ type: 'success', body: response});

    },

    getAll : async function(req, res, next) {
        
        let response = await cookbookService.getAll();

        res.status(200).json({ type: 'success', body: response});

    },
    
    deleteById : async function(req, res, next) {
        

        let response = await cookbookService.deleteById(req.params.id);

        res.status(200).json({ type: 'success', body: response});

    },
    
    updateById : async function(req, res, next) {
        
        let cookbook = {
            name : req.body.name,
            description : req.body.description,
        }

        let response = await cookbookService.updateById(req.params.id, cookbook);
        
        res.status(200).json({ type: 'success', body: response });
    }

}