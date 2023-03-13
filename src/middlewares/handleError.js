
import jwt from 'express-jwt';
import { UnauthorizedError } from "express-jwt";
import { ValidationError } from "express-validation";

class HandleError{
    static handle(error, req, res, next){
        if (error instanceof ValidationError) {
            return res.status(error.statusCode).json(error);
        }
    
        if (error instanceof UnauthorizedError) {
            return res.status(error.statusCode).json(error);
        }

        return res.status(500).json(error);
    }
}

export default HandleError;