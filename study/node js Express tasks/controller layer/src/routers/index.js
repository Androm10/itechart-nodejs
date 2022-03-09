const express = require('express');
const router = express();

const card = require('./cardRouter');
const board = require('./boardRouter');

router
    .use('/card', card)
    .use('/board', board);

module.exports = router;