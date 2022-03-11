const router = require('./src/routers');
const errorHandler = require('./src/middlewares/errorHandler');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use(errorHandler);

startServer();

function startServer() {

    try {
        app.listen(3001, () => {
            console.log('start listening');
        });
    }
    catch(error){
        console.log(error);
    }
}