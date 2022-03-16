const logger = require('./src/logger');
const errorHandler = require('./src/middlewares/errorHandler');
let router = require('./src/routers');

const express = require('express');
let app = express();


app
    .use(router)
    .use(errorHandler)



function start() {
    try {
        
        app.listen(3000);
        
    } catch (error) {
        
        logger.log('error', error);
        
    }
}