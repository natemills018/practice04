import { Router } from 'express';
import db from '../../db';

const router = Router();


router.get('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id, 10)
        const [book] = await db.books.getOne(id);

        if(!book) {
            return res.status(404).json({ message: 'No Books found at this id'})
        }
        res.json(book)
    } catch  (error) {
        console.log(error);
        res.status(500).json({ message:'Internal server error', error})
    }
})


export default router;