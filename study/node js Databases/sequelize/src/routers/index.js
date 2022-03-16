const task = require('./taskRouter');
const logRequest = require('../middlewares/logRequest');
const helmet = require('../middlewares/helmet');

const express = require('express');
let router = express.Router();


router
    .use(logRequest)
    .use(helmet)
    .use('/task', task);


module.exports = router;

