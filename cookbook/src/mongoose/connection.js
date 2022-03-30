const mongoose =  require('mongoose');
const config = require('../config');

connect();

async function connect() {
    try {
        await mongoose.connect(config.mongodb);
        console.log("server: connection to mongodb success");
    }
    catch(error) {
        console.log("server: cannot connect to mongodb");
    }
}

module.exports = mongoose;