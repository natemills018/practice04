import passport from "passport";
import { Request, Response, NextFunction } from "express";

// express middleware
export function tokenCheck (req: Request, res: Response, next: NextFunction) {
    passport.authenticate('jwt', (err: any, user: any, info: any ) => {
        if(err) {
            return next(err);
        }

        if(!user) {
            return res.status(401).json({ message: 'redirect to log in page'})
        }

        if(info) {
            return res.status(401).json({ message: info.message})
        }

        req.user = user;

        next();
    })(req, res, next)
}