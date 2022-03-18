import * as express from 'express';
import router from './src/routers';
const app = express();

app.use(router);

start();

function start(): void {
    try {
        app.listen(3000);
    } catch (error) {
        console.log(error);
    }
}