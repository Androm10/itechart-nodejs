let fs = require('fs/promises');
const logger = require('../logger');
const { create } = require('./crudOperations');
let dbPath = require('../config').databasePath;

module.exports = async () => {

    let board = dbPath + '/board.json';
    let card = dbPath + '/card.json';
    let user = dbPath + '/user.json';
    
    if(!await checkAccess(board)) {
        await createJson(board);

        await create(board, {
            name : 'Some board',
            color : 'Red',
            description : 'Simple board',
            createAt : Date.now()
        });

        await create(board, {
            name : 'Best board',
            color : 'Green',
            description : 'Simple board',
            createAt : Date.now()
        })

        await create(board, {
            name : 'Other board',
            color : 'Violet',
            description : 'Simple board',
            createAt : Date.now()
        })

    }

    if(!await checkAccess(card)) {
        await createJson(card);

        await create(card, {
            name : 'Some card',
            description : 'Simple card',
            createAt : Date.now(),
            estimate : '4h',
            status : 1,
            dueDate : Date.now() + 10000,
            labels : ['label1', 'label2']
        });

        await create(card, {
            name : 'Other card',
            description : 'Simple card',
            createAt : Date.now(),
            estimate : '3h',
            status : 1,
            dueDate : Date.now() + 10000,
            labels : ['label1', 'label2']
        })

        await create(card, {
            name : 'Best card',
            description : 'Simple card',
            createAt : Date.now(),
            estimate : '2h',
            status : 1,
            dueDate : Date.now() + 10000,
            labels : ['label1', 'label2']
        })

    }

    if(!await checkAccess(user)) {
        await createJson(user);


        await create(user, {
            login : 'email@gmail.com',
            password : 'uncrypted',
            role: 'User'
        })

        await create(user, {
            login : 'owner@gmail.com',
            password : 'qwerty',
            role: 'Admin'
        })

    }



}


async function checkAccess(file) {

    try {
        await fs.access(file);
        return true;
    }
    catch(err) {
        
        return false;

    }

}

async function createJson(filename) {

    try {
        await fs.appendFile(filename, "{\n}");
    }
    catch(err) {
        logger.log('error', err);
    }
}

