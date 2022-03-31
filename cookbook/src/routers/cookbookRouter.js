const express = require('express');
const router = express.Router();

const cookbookController = require('../controllers/cookbookController');
const viewController = require('../controllers/viewController');

const async = require('../middlewares/async');
const isAdmin = require('../middlewares/isAdmin');
let validate = require('../middlewares/validate');

let cookbookSchema = require('../schemas/cookbookSchema');

router.get('/number', isAdmin, async(cookbookController.countAll));
router.get('/views/:id', isAdmin, async(viewController.getViewsOnCookbook));
router.get('/mostPopular', isAdmin, async(cookbookController.mostPopular));


router.get('/:id', async(cookbookController.getById));

router.get('/', async(cookbookController.getAll));

router.delete('/:id', async(cookbookController.deleteById));

router.patch('/cloneCookbook/:id', async(cookbookController.cloneCookbook));

//add/delete recipe from cookbook
router.patch('/:id/linkRecipe/:recipeId', async(cookbookController.linkRecipe));
router.patch('/:id/unlinkRecipe/:recipeId', async(cookbookController.unlinkRecipe));

router.put('/:id', validate(cookbookSchema), async(cookbookController.updateById));

router.post('/', validate(cookbookSchema), async(cookbookController.addCookbook));



module.exports = router;