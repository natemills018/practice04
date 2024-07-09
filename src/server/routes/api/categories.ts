import { Router } from 'express';
import db from '../../db';

const router = Router();


router.get('/', async (req, res) => {
    try {
        const categories = await db.categories.getAll()
        // if(!books) {
        //     return res.status(404).json({ message: 'No Books found in the database'})
        // }

        res.json(categories)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error, cant retrieve books', error})
    }
})


export default router;


