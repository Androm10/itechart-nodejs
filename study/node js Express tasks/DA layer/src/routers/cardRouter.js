const express = require('express');
const router = express.Router();

const cardController = require('../controllers/cardController');

const async = require('../utils/async');


router.get('/', async(cardController.getAll));

router.post('/', async(cardController.create));

router.get('/:id', async(cardController.getById));

router.delete('/:id', async(cardController.deleteById));

router.put('/:id', async(cardController.updateById));



module.exports = router;