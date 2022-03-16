let helmet = require('helmet');

if(process.env.NODE_ENV !== 'production') {
    for(let prop in helmet) {
        helmet[prop] = false;
    }

}


module.exports = helmet;