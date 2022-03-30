const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');
const async = require('../middlewares/async');

let validate = require('../middlewares/validate');
let authSchema = require('../schemas/authSchema');
let resetPasswordSchema = require('../schemas/resetPasswordSchema');


router.post('/signup', validate(authSchema), async(authController.signup));

router.post('/login', async(authController.login) );

router.post('/grantNewTokens', async(authController.grantNewTokens));

router.post('/resetPassword', async(authController.resetPasswordRequest));

router.post('/resetPassword/:uuid',validate(resetPasswordSchema), async(authController.resetPassword));

module.exports = router;