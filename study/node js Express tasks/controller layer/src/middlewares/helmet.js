const helmet = require('helmet');

// eslint-disable-next-line no-undef
if(process.env.NODE_ENV != 'production') {

    for(let prop in helmet) {
        helmet[prop] = false;
    }

}

module.exports = helmet();