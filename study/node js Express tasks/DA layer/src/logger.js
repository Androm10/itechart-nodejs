const winston = require('winston');

const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.File({filename: 'errors.log', level: 'error'}),
        new winston.transports.File({filename: 'requests.log', level: 'http'}),
    ],
  
});

// eslint-disable-next-line no-undef
if(process.env.NODE_ENV != 'production') {
    logger
        .clear()
        .add(
            new winston.transports.Console({
                level: 'error'
            })
        )
}

module.exports = logger;