const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const async = require('../middlewares/async');

const userInfoSchema = require('../schemas/userInfoSchema');
const validate = require('../middlewares/validate');


router.put('/updateProfile', validate(userInfoSchema), async(userController.updateProfile));





module.exports = router;