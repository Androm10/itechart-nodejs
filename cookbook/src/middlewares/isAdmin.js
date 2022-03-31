const userService = require("../services/userService");
const ResponseError = require("../utils/ResponseError");

module.exports = async (req, res, next) => {

    let user = await userService.getById(req.user.id);
    let roles = await user.getRoles();

    if(roles.find((role) => { return role.name == 'Admin'})) {
        next();
    }  
    else {
        next(new ResponseError('No access', 403));
    }
}