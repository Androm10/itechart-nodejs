const express = require('express');
const router = express.Router();

const recipeController = require('../controllers/recipeController');
const viewController = require('../controllers/viewController');

const async = require('../middlewares/async');
const isAdmin = require('../middlewares/isAdmin');

let validate = require('../middlewares/validate');
let recipeSchema = require('../schemas/recipeSchema');

router.get('/number', isAdmin, async(recipeController.countAll));
router.get('/views/:id', isAdmin, async(viewController.getViewsOnRecipe));
router.get('/mostPopular', isAdmin, async(recipeController.mostPopular));

router.get('/:id', async(recipeController.getById));

router.get('/', async(recipeController.getAll));

router.delete('/:id', async(recipeController.deleteById));

router.patch('/cloneRecipe/:id', async(recipeController.cloneRecipe));

router.put('/:id', validate(recipeSchema), async(recipeController.updateById));

router.post('/', validate(recipeSchema), async(recipeController.addRecipe));



module.exports = router;