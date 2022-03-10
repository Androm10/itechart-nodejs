let joi = require('joi');

let boardSchema = joi.object().keys({
    name : joi
        .string()
        .min(3)
        .max(50)
        .required(),

    description : joi
        .string()
        .optional(),

    color : joi
        .string()
        .required(),

});

module.exports = boardSchema;