const logger = require("../logger");

module.exports = (error, req, res, next) => {

    if(!error) {
        next();
    }

    logger.log('error', { ...error, date : Date.now() });

    res.status(error.status || 500)
    .json({ 
        type : 'error', 
        body : error.status >= 500 ? 'Unexpected error' : error.message
    });

}