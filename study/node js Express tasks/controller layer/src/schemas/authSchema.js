let joi = require('joi');

let authSchema = joi.object().keys({

    login : joi
        .string()
        .email()
        .required(),

    password: joi
        .string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
        .required(),

    passwordConfirm : joi
        .ref('password'),

});

module.exports = authSchema;