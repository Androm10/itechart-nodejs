const express = require('express');
const router = express.Router();

const cardController = require('../controllers/cardController');

const async = require('../utils/async');

const validate = require('../middlewares/validate');
const cardSchema = require('../schemas/cardSchema');
const isAdmin = require('../middlewares/isAdmin');

router.get('/', async(cardController.getAll));

router.post('/', validate(cardSchema), async(cardController.create));

router.get('/:id', async(cardController.getById));

router.use(isAdmin);

router.delete('/:id', async(cardController.deleteById));

router.put('/:id', validate(cardSchema), async(cardController.updateById));



module.exports = router;