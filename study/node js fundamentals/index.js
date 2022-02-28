const { getLeaderJoke, getRandomJokeByTerm } = require('./src/commands');


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



