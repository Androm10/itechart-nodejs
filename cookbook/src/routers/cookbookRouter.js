const express = require('express');
const router = express.Router();

const cookbookController = require('../controllers/cookbookController');
const async = require('../middlewares/async');

let validate = require('../middlewares/validate');
let cookbookSchema = require('../schemas/cookbookSchema');

router.get('/:id', async(cookbookController.getById));

router.get('/', async(cookbookController.getAll));

router.delete('/:id', async(cookbookController.deleteById));

router.use(validate(cookbookSchema));
router.put('/:id', async(cookbookController.updateById));

router.post('/', async(cookbookController.addCookbook));



module.exports = router;