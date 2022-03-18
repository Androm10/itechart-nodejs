import * as express from 'express';
import taskRouter from './taskRouter';

const mainRouter  = express.Router();

mainRouter.use('/task', taskRouter);

export default mainRouter;