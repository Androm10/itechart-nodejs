const express = require('express');
const router = express.Router();

const boardController = require('../controllers/boardController');

const async = require('../utils/async');


router.get('/', async(boardController.getAll));

router.post('/', async(boardController.create));

router.get('/:id', async(boardController.getById));

router.delete('/:id', async(boardController.deleteById));

router.put('/:id', async(boardController.updateById));



module.exports = router;