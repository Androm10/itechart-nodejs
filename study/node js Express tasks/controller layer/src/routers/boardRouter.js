const express = require('express');
const boardController = require('../controllers/boardController');
const router = express.Router();


router.get('/', boardController.getAll);

router.post('/', boardController.create);

router.get('/:id', boardController.getById);

router.delete('/:id', boardController.deleteById);

router.put('/:id', boardController.updateById);



module.exports = router;