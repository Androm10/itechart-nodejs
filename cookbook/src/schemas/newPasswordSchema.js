let joi = require('joi');

let authSchema = joi.object().keys({

    oldPassword : joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

    newPassword: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

    newPasswordConfirm : joi.ref('newPassword'),


});

module.exports = authSchema;