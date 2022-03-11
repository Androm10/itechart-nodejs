/* eslint-disable no-undef */
let result = require('dotenv').config({
    path : __dirname + '\\..\\.env'
});

if (result.error) {
    console.log("error occured while reading .env data ");
    console.log(result.error);
}
  
console.log(result.parsed);

module.exports = {

    databasePath : process.env.DB_PATH || (__dirname + '/database'),
    
}