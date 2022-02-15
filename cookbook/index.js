let express = require('express');
let sequelize = require('./src/database');

const app = express();




startListening();

function startListening() {
    try {
        app.listen(3000, () => {
            
            console.log("start listening");

        })
    }
    catch(error) {

        console.log("cannot start listening");
    
    }
}