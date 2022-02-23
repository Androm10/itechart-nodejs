let https = require('https');

const { writeJoke, readJokes } = require("./fileWorker");
const { getRandomInt } = require('./utils/getRandomInt');

exports.getLeaderJoke = async function () {

    //read 'jokes' and convert it to object
    let jokes = readJokes();


    let maxCount = 0;
    let maxId;

    //finding joke with max count property
    for(let id in jokes) {
        
        if(jokes[id].count > maxCount){
            maxCount = jokes[id].count;
            maxId = id;
        }

    }
    return jokes[maxId];
}


exports.getRandomJokeByTerm = function (term) {

    const options = {
        hostname: 'icanhazdadjoke.com',
        port : 443,    
        path : `/search?limit=1&term=${term}`,
        headers : {
            Accept : 'application/json',
            Connection : 'keep-alive',
        },
        method : 'GET',
    }

    //getting all jokes for the search term ( 1 page = 1 joke, cause we passed limit=1)
    const req = https.request(options, (res) => {

        let data = [];

        res.on('data', (chunk) => {
            data.push(chunk);
        });
        
        res.on('end', () => {
            
            data = Buffer.concat(data);

            let body = JSON.parse(data);

            if(body.total_jokes == 0) {
        
                console.log('No jokes were found for that search term');
                return;

            }

            //getting random joke by another request
            let randomizedJokePage = getRandomInt(1, body.total_pages); 

            options.path = options.path + `&page=${randomizedJokePage}`;

            let subReq = https.request(options, (res) => {
                
                let data = [];

                res.on('data', (chunk) => {
                    data.push(chunk);
                });

                res.on('end', () => {

                    data = Buffer.concat(data);

                    let totalJoke  = JSON.parse(data).results[0];

                    console.log(totalJoke.joke);

                    writeJoke(totalJoke);
                
                })

            })

            subReq.on('error', (error) => {
        
                console.log(error);
        
            })

            subReq.end();

        })

    });

    req.on('error', (error) => {
        
        console.log(error);

    })

    req.end();
}