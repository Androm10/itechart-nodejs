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
businessLayerTypes = {
    http : '/services/http',
    //rabbit : '/services/rabbit'
}

module.exports = {

    businessLayerUrl : process.env.BUSINESS_URL || "http://localhost:3002/",
    secret :  process.env.SECRET || "secret",
    
    usedService : __dirname + businessLayerTypes[process.env.BUSINESS_TYPE || 'http']
}