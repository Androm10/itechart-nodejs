const path = require('../config').jwtBlacklist;
const secret = require('../config').secret;
const jwt = require('jsonwebtoken');

const { Transform } = require('stream');
const fs = require('fs');

module.exports = {

    // async createList(path) {
        
    //     try {

    //         fs.access(path)
    //         return true;

    //     }
    //     catch(error) {
            
    //         try {
    //             fs.appendFileSync(path, '');
    //             return true;
    //         }
    //         catch(err) {
    //             return false;
    //         }
    //     }

    // },

    add(token) {

        fs.appendFile(path, token + '\n', (err) => {
            if(err) {
                throw(new Error('Cannot append token to blacklist'));
            }

        });

    },

    has(token) {
        return new Promise( (resolve, reject) => {

            let listStream = fs.createReadStream(path);
            let chunks = [];

            listStream.on('readable', () => {


                if(chunks.length < 3) {
                    
                    chunks.push(listStream.read());
                }
                else {
                    chunks.shift();
                }

                let findResult = chunks.toString().split('\n').includes(token);

                if(findResult) {    
                    
                    resolve(true);
                }

            })

            listStream.on('error', (err) => {
                reject(err);
            })

            listStream.on('close', () => {

                resolve(false);
            })
        })        

    },

    async clearList() {

        let listStream = fs.createReadStream(path);
        let cleaningStream = new Transform();
        await fs.promises.appendFile(__dirname + '/blacklist tmp.txt', '');

        let newListStream = fs.createWriteStream(__dirname + '/blacklist tmp.txt');

        cleaningStream._transform = (chunk, encoding, callback) => {

            let tokens = chunk.toString().split('\n');

            for(let token of tokens) {

                try {
                    jwt.verify(token, secret);
                    cleaningStream.push(token + '\n');
                }
                catch(err) {
                }

            }

        }

        listStream.pipe(cleaningStream).pipe(newListStream);

        
        setTimeout(async () => {

            await fs.promises.rm(path);

            await fs.promises.rename(__dirname + '/blacklist tmp.txt', path);
        }, 5000);
            

    }



}