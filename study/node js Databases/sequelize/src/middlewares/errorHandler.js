module.exports = (error, req, res, next) => {

    let status = error.status || 500;
    let message = status >= 500 ? 'Unexpected error' : error.message;

    res.status(status).json({ type : 'error', body : message });
}