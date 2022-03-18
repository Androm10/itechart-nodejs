import * as dotenv from 'dotenv';
let env = dotenv.config();

if(!env.error) {
    console.log('Cannot read environment values');
}
console.log(env.parsed);

class Config {

    MongoConnection : string;

    constructor(MongoConnection : string = '') {
        this.MongoConnection = MongoConnection;
    }

}


export default new Config(process.env.MDB_CONN);