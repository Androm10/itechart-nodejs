const logger = require("../logger");

module.exports = (error, req, res, next) => {

    if(!error) {
        next();
    }

    logger.log('error', { date : Date.now(), message: error.message, stack : error.stack });

    let status = error.status || 500;

    res.status(status)
    .json({ 
        type : 'error', 
        body : status >= 500 ? 'Unexpected error' : error.message
    });
}