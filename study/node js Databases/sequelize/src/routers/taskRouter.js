const express = require('express');
let router = express.Router()

const taskController = require('../controllers/taskController');
const async = require('../middlewares/async');


router.get('/emptyCarsInUse', async(taskController.getEmptyCarsInUse));
router.get('/CarsWithUnregisteredCard', async(taskController.getCarsWithUnregisteredCard));

router.post('/', async(taskController.addCar));

router.put('/setCarInService', async(taskController.setCarInService));
router.put('/setCarOnParking', async(taskController.setCarOnParking));

router.delete('/deleteCarByVIN/:VIN', async(taskController.deleteCarByVIN));


module.exports = router;