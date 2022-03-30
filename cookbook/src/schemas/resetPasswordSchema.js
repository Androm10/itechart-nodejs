let joi = require('joi');

let resetPasswordSchema = joi.object().keys({

    newPassword : joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),

    newPasswordConfirmation: joi.ref('newPassword'),

});

module.exports = resetPasswordSchema;