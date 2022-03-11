/* eslint-disable no-undef */
let result = require('dotenv').config({
    path : __dirname + '\\..\\.env'
});

if (result.error) {
    console.log("error occured while reading .env data ");
    console.log(result.error);
}
  
console.log(result.parsed);

//layer interaction service
DALayerTypes = {
    http : '/services/http',
    //rabbit : '/services/rabbit'
}

module.exports = {

    DALayerUrl : process.env.DA_URL || "http://localhost:3002/",
    
    usedService : __dirname + DALayerTypes[process.env.DA_TYPE || 'http']
}