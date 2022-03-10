const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

const async = require('../utils/async');


router.get('/', async(userController.getAll));

router.post('/', async(userController.create));

router.get('/:id', async(userController.getById));

// router.delete('/:id', async(userController.deleteById));

// router.put('/:id', async(userController.updateById));



module.exports = router;