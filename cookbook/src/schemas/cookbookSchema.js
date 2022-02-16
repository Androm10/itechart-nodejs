let joi = require('joi');

let cookbookSchema = joi.object().keys({
    name : joi.string().min(3).max(50).required(),

    description : joi.string().optional(),
});

module.exports = cookbookSchema;