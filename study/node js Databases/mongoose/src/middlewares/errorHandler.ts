import ResponseError from "../utils/ResponseError";
import {Request, Response, NextFunction} from 'express';


export default (error : ResponseError, req : Request, res : Response, next : NextFunction  ) => {

    let status: number = error.status || 500;
    let message: string = status >= 500 ? 'Unexpected error' : error.message;

    if(process.env.NODE_ENV !== 'production')
        message = error.message;

    res.status(status).json({ type : 'error', body : message });
}