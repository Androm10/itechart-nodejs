let joi = require('joi');

let recipeSchema = joi.object().keys({
    name : joi.string().min(3).max(50).required(),

    description : joi.string().optional(),

    directions : joi.string().min(3).max(50).required(),

    ingridients : joi.string().min(3).max(50).required(),

    cookingTime : joi.number().greater(0).optional(),

});

module.exports = recipeSchema;