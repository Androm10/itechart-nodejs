const express = require('express');
const router = express.Router();

const commentController = require('../controllers/commentController');
const async = require('../middlewares/async');

router.post('/cookbookComment/:id', async(commentController.addCommentToCookbook));
router.post('/recipeComment/:id', async(commentController.addCommentToRecipe));

router.delete('/cookbookComment/:id', async(commentController.deleteCommentFromCookbook));
router.delete('/recipeComment/:id', async(commentController.deleteCommentFromRecipe));

router.get('/recipeComment/:id', async(commentController.getCommentToRecipeById));
router.get('/cookbookComment/:id', async(commentController.getCommentToCookbookById));

router.put('/recipeComment/:id', async(commentController.updateCommentToRecipeById));
router.put('/cookbookComment/:id', async(commentController.updateCommentToCookbookById));


module.exports = router;