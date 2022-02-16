let joi = require('joi');

let authSchema = joi.object().keys({
    login : joi.string().email().required(),

    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

    'password-confirmation' : joi.ref('password'),

    username : joi.string().alphanum().min(3).max(30).required()

});

module.exports = authSchema;