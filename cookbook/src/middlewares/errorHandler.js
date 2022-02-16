
module.exports = async function(error, req, res, next) {

    if(error) {        

        if(error.details)
            console.log(error.details);


        console.log('error', error);

        res.status(error.status || 500).json({ type: 'error', message: error.message });

    }
    else {
        next();
    }

}