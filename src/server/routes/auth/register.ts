import * as jwt  from 'jsonwebtoken';
import config from '../../config';
import db from '../../db';
import Router from 'express';
import { generateHash } from '../../db/passwords';

const router = Router();

router.post('/', async (req, res) => {
    const newUser = req.body;
    try {
        const result = await db.users.insert(newUser)
        console.log(result)
        const token = jwt.sign(
            { userid: result.insertId, email: newUser.email, role: 1},
             config.jwt.secret, 
            { expiresIn: '15d'})
           res.json(token)
        //check for users email
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'this code sucks'})
    }

})



export default router;


