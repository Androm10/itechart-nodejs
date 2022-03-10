const express = require('express');
const router = express();

const card = require('./cardRouter');
const board = require('./boardRouter');
const user = require('./userRouter');

const log = require('../middlewares/logRequest');

router
    .use(log)
    .use('/user', user)
    .use('/card', card)
    .use('/board', board);

module.exports = router;