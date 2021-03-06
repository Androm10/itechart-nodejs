const express = require('express');
const router = express();

const card = require('./cardRouter');
const board = require('./boardRouter');
const auth = require('./authRouter');

const authorize = require('../middlewares/authorize');
const helmet = require('../middlewares/helmet');
const log = require('../middlewares/logRequest');

router
    .use(helmet)
    .use(log)
    .use('/auth',auth)
    .use(authorize)
    .use('/card', card)
    .use('/board', board);

module.exports = router;