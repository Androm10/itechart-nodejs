const authService = require('../services/authService');

module.exports = async (req, res, next) => {

    let isAdmin = await authService.isAdmin(req.user);

    if(isAdmin)
        next();
    else
        next(new Error('no access').status = 403);
        
}