import * as mongoose from 'mongoose';
import config from '../config';

connect();

async function connect() {
    try {
        await mongoose.connect(config.MongoConnection);
        console.log("server: connection to mongodb success");
    }
    catch(error) {
        console.log("server: cannot connect to mongodb");
    }
}

export default mongoose;