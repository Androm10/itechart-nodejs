const models = require('../database').models;

module.exports = {

    addCookbook : async function(data) {

        let cookbook = await models.cookbook.findOne( {where : { name: data.name}}) ;

        if(cookbook)
            throw(new Error('cookbook with such name already exists'));

        return await models.cookbook.create(data);

    },

    getById : async function(cookbookId) {

        let cookbook = await models.cookbook.findByPk(cookbookId);
        
        if(!cookbook)
            throw(new Error('no such cookbook'));

        return cookbook;

    },

    getAll : async function() {

        let cookbooks = await models.cookbook.findAll();
        return cookbooks;

    },

    deleteById : async function(cookbookId) {

        let cookbook = await models.cookbook.findByPk(cookbookId);

        if(!cookbook)
            throw(new Error('no such cookbook'));

        cookbook.destroy();
        return cookbook;

    },

    updateById : async function(cookbookId, data) {

        let cookbook = await models.cookbook.findByPk(cookbookId);

        if(!cookbook)
            throw(new Error('no such cookbook'));

        await cookbook.update(data);
        
        return cookbook;

    },


}