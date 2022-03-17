let winston = require('winston');


let logger = winston.createLogger({
    
    format : winston.format.json(),
    transports : [
        new winston.transports.File({filename : 'requestsHistory.log', level : 'http'}),
        new winston.transports.File({filename : 'errors.log', level : 'error'})
    ]
})


if (process.env.NODE_ENV !== 'production') {
    logger
        .clear()
        .add(
            new winston.transports.Console()
        )
}

module.exports = logger;