const authService = require('../services/authService');
const ResponseError = require('../utils/responseError');

module.exports = async (req, res, next) => {

    let isAdmin = await authService.isAdmin(req.user);

    if(isAdmin)
        next();
    else
        next(new ResponseError('No access', 403));
        
}