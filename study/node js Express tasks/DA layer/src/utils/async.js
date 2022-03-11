module.exports = (endpoint) => {

    return async (req, res, next) => {

        try {
            await endpoint(req, res);
        }
        catch(error) {
            next(error);
        }

    }

}