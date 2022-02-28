const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const async = require('../middlewares/async');

const userInfoSchema = require('../schemas/userInfoSchema');
const newPasswordSchema = require('../schemas/newPasswordSchema');
const validate = require('../middlewares/validate');


router.put('/updateProfile', validate(userInfoSchema), async(userController.updateProfile));

router.patch('/changePassword', validate(newPasswordSchema), async(userController.changePassword));



module.exports = router;