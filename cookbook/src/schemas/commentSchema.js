let joi = require('joi');

let commentSchema = joi.object().keys({

    text : joi.string().required(),

    rate : joi.number().min(1).max(5).required(),

});

module.exports = commentSchema;