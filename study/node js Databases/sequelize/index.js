const logger = require('./src/logger');
let router = require('./src/routers');

const express = require('express');
let app = express();


app.use(router)

start();

function start() {
    try {
        
        app.listen(3000);
        
    } catch (error) {
        
        logger.log('error', error);
        
    }
}