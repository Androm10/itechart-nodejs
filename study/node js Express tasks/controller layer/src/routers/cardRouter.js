const express = require('express');
const cardController = require('../controllers/cardController');
const router = express.Router();


router.get('/', cardController.getAll);

router.post('/', cardController.create);

router.get('/:id', cardController.getById);

router.delete('/:id', cardController.deleteById);

router.put('/:id', cardController.updateById);



module.exports = router;