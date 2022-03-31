const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const async = require('../middlewares/async');

const userInfoSchema = require('../schemas/userInfoSchema');
const newPasswordSchema = require('../schemas/newPasswordSchema');
const validate = require('../middlewares/validate');
const isAdmin = require('../middlewares/isAdmin');


router.put('/updateProfile', validate(userInfoSchema), async(userController.updateProfile));

router.patch('/changePassword', validate(newPasswordSchema), async(userController.changePassword));

router.use(isAdmin);

router.patch('/updateStatus/:id', async(userController.updateStatus));
router.get('/stats', async(userController.getStatusStats));
router.get('/mostActive', async(userController.mostActive));


module.exports = router;