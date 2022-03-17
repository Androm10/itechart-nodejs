const task = require('./taskRouter');
const logRequest = require('../middlewares/logRequest');
const helmet = require('../middlewares/helmet');
const errorHandler = require('../middlewares/errorHandler');

const express = require('express');
let router = express.Router();


router
    .use(logRequest)
    .use(helmet)
    .use('/task', task)
    .use(errorHandler)

module.exports = router;

