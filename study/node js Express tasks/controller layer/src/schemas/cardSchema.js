let joi = require('joi');

let cardSchema = joi.object().keys({

    name : joi
        .string()
        .min(3)
        .max(50)
        .required(),
    
    description : joi
        .string()
        .optional(),

    estimate : joi
        .string()
        .required(),

    status : joi
        .number()
        .min(1)
        .max(2)
        .required(),

    dueDate : joi
        .date()
        .iso()
        .required(),

    labels : joi
        .array()
        .items(joi.string())
        .optional()

});

module.exports = cardSchema;