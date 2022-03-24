import * as express from 'express';
import router from './src/routers';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);

start();

function start(): void {
    try {
        app.listen(3000);
        console.log('STARTED');
    } catch (error) {
        console.log(error);
    }
}