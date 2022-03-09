
module.exports = (error, req, res, next) => {

    if(!error) {
        next();
    }

    res.status(error?.status || 500)
    .json({ type : 'error', body : error.message });

}