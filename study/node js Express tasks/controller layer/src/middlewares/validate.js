module.exports = (schema) => {

    return async (req, res, next) => {
        
        try {

            await schema.validateAsync(req.body);
            
            next();
        
        }
        catch(error) {
            error.status = 400;
            console.log(error.details);
            next(error);
        }

    }
    
}