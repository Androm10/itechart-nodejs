module.exports = async (endpoint) => {

    return async (req, res, next) => {

        try {
            endpoint(req, res);
        }
        catch(error) {
            next(error);
        }

    }

}