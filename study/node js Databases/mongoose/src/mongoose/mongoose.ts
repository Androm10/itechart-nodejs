import * as mongoose from 'mongoose';
import config from '../config';
import initialize from './initialize';

connect();

async function connect() {
    try {
        await mongoose.connect(config.MongoConnection);
        console.log("server: connection to mongodb success");
        initialize();
    }
    catch(error) {
        console.log("server: cannot connect to mongodb");
    }
}

export default mongoose;