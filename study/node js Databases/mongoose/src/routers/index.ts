import * as express from 'express';
import errorHandler from '../middlewares/errorHandler';
import taskRouter from './taskRouter';

const mainRouter  = express.Router();

mainRouter
    .use('/task', taskRouter)
    .use(errorHandler);

export default mainRouter;