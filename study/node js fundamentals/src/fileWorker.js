let fs = require('fs/promises');

let pathToJokes = __dirname + '/../jokes.json';

async function writeJoke(joke) {
    
    if(!await createFileIfNotExists())
        return;

    let jokes = await readJokes();

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

    fs.writeFile(pathToJokes, JSON.stringify(jokes));

}


async function readJokes() {
    
    try {

        let json = JSON.parse(await fs.readFile(pathToJokes));

        return json;
    }
    catch(error) {
        
        await fs.writeFile(pathToJokes, '{\n}');

        return {};
    }

}


async function createFileIfNotExists() {

    try {

        await fs.access(pathToJokes);
        
        return true;
    }
    catch(error) {

        try {

            await fs.appendFile(pathToJokes, '{\n}');
            return true;
        }
        catch(err) {

            console.log('cannot create "jokes.json"');
            return false;
        }

    }
    
    

}

module.exports = {readJokes, writeJoke};