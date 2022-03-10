const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const async = require('../utils/async');
const validate = require('../middlewares/validate');
const authSchema = require('../schemas/authSchema');

router.post('/signup', validate(authSchema), async(authController.signUp));

router.post('/login', async(authController.logIn));




module.exports = router;