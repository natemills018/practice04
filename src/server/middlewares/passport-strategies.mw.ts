import * as passport from 'passport';
import * as PassportLocal from 'passport-local';
import * as PassportJWT from 'passport-jwt';
import { compareHash } from '../db/passwords';
import config from '../config';
import db from '../db';
import { JwtPayload } from 'jsonwebtoken';
import { Application } from 'express';
import { User } from '../types';
import { Payload } from '../types';


// export function configurePassword(app: Application) {
//     passport.serializeUser((user: User, done) => {
//         if(user.password) {
//             delete user.password;
//         }

//         done(null, user)
//     })
//     passport.deserializeUser((user: User, done) => done(null, user));
// }