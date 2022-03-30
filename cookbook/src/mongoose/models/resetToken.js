const mongoose = require("../connection");
const resetToken = require('./schemas/resetToken');

module.exports = mongoose.model('resetToken', resetToken);

