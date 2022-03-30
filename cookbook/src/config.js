let result = require('dotenv').config();

if (result.error) {
    console.log(result.error);
}
  
console.log(result.parsed)

module.exports = {
    
    database : {
        user : process.env.DB_USER          || "user",
        password : process.env.DB_PASS      || "root",
        name : process.env.DB_NAME          || "cookbook",
        dialect : process.env.DB_DIALECT    || "mysql",
        ip : process.env.DB_IP              || "localhost",
        port : process.env.DB_PORT          || "3306",
    },

    server: {
        host: process.env.HOST || 'localhost',
    },

    secret : process.env.SECRET || "secret",
    
    jwtBlacklist : __dirname + '/../jwtBlacklist.txt',
    
    mongodb : process.env.MONGO_CONNECTION,

    rabbitmq : process.env.RABBIT_URL || 'amqp://localhost',

    sortTypes : [
        'popularity',
        'likes',
    ]
}

