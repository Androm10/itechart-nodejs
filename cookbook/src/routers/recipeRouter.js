const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/recipeController');
const async = require('../middlewares/async');

let validate = require('../middlewares/validate');
let recipeSchema = require('../schemas/recipeSchema');

router.get('/:id', async(recipeController.getById));

router.get('/', async(recipeController.getAll));

router.delete('/:id', async(recipeController.deleteById));

router.patch('/cloneRecipe/:id', async(recipeController.cloneRecipe));

router.use(validate(recipeSchema));
router.put('/:id', async(recipeController.updateById));

router.post('/', async(recipeController.addRecipe));



module.exports = router;