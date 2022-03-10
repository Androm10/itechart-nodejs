const express = require('express');
const router = express.Router();

const boardController = require('../controllers/boardController');

const async = require('../utils/async');

const validate = require('../middlewares/validate');
const boardSchema = require('../schemas/boardSchema');


router.get('/', async(boardController.getAll));

router.post('/', validate(boardSchema), async(boardController.create));

router.get('/:id', async(boardController.getById));

router.delete('/:id', async(boardController.deleteById));

router.put('/:id', validate(boardSchema), async(boardController.updateById));



module.exports = router;