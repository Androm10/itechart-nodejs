let fs = require('fs/promises');
let https = require('https');

let searchTermId;
let term = '';

if(process.argv.includes('--leaderboard')) {

    getLeaderJoke().then( joke => {

        console.log('****************************************\n' +
        `Leader:\nCounts: ${joke.count}\n${joke.text}` +
        '\n****************************************');
    
    });

}

if((searchTermId = process.argv.indexOf('--searchTerm')) != -1) {

    term = searchTermId + 1 <= process.argv.length ? process.argv.at(searchTermId+1) : '';

    getRandomJokeByTerm(term);

}


async function getLeaderJoke() {

    //read 'jokes' and convert it to object
    let jokes = JSON.parse(await fs.readFile('./jokes.json'));


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

async function writeJoke(joke) {
    
    let jokes = JSON.parse(await fs.readFile('./jokes.json'));

    //if joke exists in jokes.json, then we increment count property
    if(joke.id in jokes)
        jokes[joke.id].count++;
    else {
        let id = joke.id;

        jokes[id] = {
            text : joke.joke,
            count : 1
        }
    }

    fs.writeFile('./jokes.json', JSON.stringify(jokes));

}

function getRandomInt(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}

function getRandomJokeByTerm(term) {

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

    //getting amount of pages ( 1 page = 1 joke, cause we passed limit=1)
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