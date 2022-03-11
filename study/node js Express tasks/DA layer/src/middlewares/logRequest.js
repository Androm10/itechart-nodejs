const logger = require("../logger")


module.exports = (req, res, next) => {
    
    let form = {
        url : req.baseURL,
        params : req.params,
        query : req.query,
        method : req.method,
        headers : req.headers,
        body : req.body,
        date : Date.now()
    }

    logger.log('http', form);

    next();

}