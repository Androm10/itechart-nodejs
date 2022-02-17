const express = require('express');
const router = express.Router();

const likeController = require('../controllers/likeController');
const async = require('../middlewares/async');


router.get('/cookbookLike/:id', async(likeController.addLikeToCookbook));
router.delete('/cookbookLike/:id', async(likeController.deleteLikeFromCookbook));

router.get('/recipeLike/:id', async(likeController.addLikeToRecipe));
router.delete('/recipeLike/:id', async(likeController.deleteLikeFromRecipe));





module.exports = router;