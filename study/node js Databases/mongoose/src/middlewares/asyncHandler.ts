import {Request, Response, NextFunction} from 'express';


export default <Middle extends (req: Request, res: Response, next: NextFunction) =>Promise<void> >
(callback : Middle ) => {
    return async (req:Request, res: Response, next: NextFunction) => {
        try {
            await callback(req, res, next);
        } catch(error) {
            next(error)
        }
    }

}