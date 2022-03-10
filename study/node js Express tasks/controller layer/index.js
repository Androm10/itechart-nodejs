const router = require('./src/routers');
const passport = require('./src/passport');
const errorHandler = require('./src/middlewares/errorHandler');

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());

app.use(router);
app.use(errorHandler);

startServer();

function startServer() {

    try {
        app.listen(3306, () => {
            console.log('start listening');
        });
    }
    catch(error){
        console.log(error);
    }
}