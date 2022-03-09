const express = require('express');
const app = express();

const router = require('./src/routers');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(passport.initialize());

app.use(router);

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