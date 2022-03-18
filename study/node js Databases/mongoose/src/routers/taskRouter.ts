import * as express from 'express';
import taskController from '../controllers/TaskController';
import async from '../middlewares/asyncHandler';

const taskRouter = express.Router();


taskRouter.get('/emptyCarsInUse', async(taskController.getEmptyCarsInUse))

taskRouter.get('/CarsWithUnregisteredCard', async(taskController.getCarsWithUnregisteredCard))

taskRouter.post('/', async(taskController.addCar))

taskRouter.put('/setCarInService', async(taskController.setCarInService))

taskRouter.put('/setCarOnParking', async(taskController.setCarOnParking))

taskRouter.delete('/deleteCarByVIN/:VIN', async(taskController.deleteCarByVIN))

export default taskRouter;