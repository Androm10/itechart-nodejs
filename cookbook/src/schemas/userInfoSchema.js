let joi = require('joi');

let userInfoSchema = joi.object().keys({
    username : joi.string().min(3).max(50).optional(),
    info : joi.string().optional(),
});

module.exports = userInfoSchema;