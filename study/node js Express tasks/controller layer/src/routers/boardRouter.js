const express = require('express');
const router = express.Router();

const boardController = require('../controllers/boardController');

const async = require('../utils/async');

const validate = require('../middlewares/validate');
const boardSchema = require('../schemas/boardSchema');
const isAdmin = require('../middlewares/isAdmin');

router.get('/', async(boardController.getAll));

router.get('/:id', async(boardController.getById));

router.use(isAdmin);

router.post('/', validate(boardSchema), async(boardController.create));

router.delete('/:id', async(boardController.deleteById));

router.put('/:id', validate(boardSchema), async(boardController.updateById));



module.exports = router;