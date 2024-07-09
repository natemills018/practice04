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


router.get('/', async (req, res) => {
    try {
        const books = await db.books.getAll();
        // if(!books) {
        //     return res.status(404).json({ message: 'No Books found in the database'})
        // }

        res.json(books)
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error, cant retrieve books', error})
    }
})


// router.post('/', async (req, res) => {
//     try {
//         const newBook = req.body;
//         const result = await db.books.insert();
//         res.json({ message: 'New Book added to Db', id: result.insertId  })
        
//     } catch (error) {
        
//     }
// })
router.post('/', async (req, res) => {
    try {
        const newBook = req.body;
        const result = await db.books.insert(newBook.author, newBook.title, newBook.price, newBook.category_id);
        res.json({ message: 'New Author added', id: result.insertId});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})


router.delete('/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id, 10)
        const deletedBook = req.body;
        console.log({ id, bookData: deletedBook})
        await db.books.deleteBook(id)
        res.json({ message: `The book at id number ${id} has been deleted`})
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})


router.put('/:id', async(req, res) => {
    try {
        const id = parseInt(req.params.id, 10)
        const updatedBook = req.body;
        console.log({ id, bookData: updatedBook});
        await db.books.updatedBook(updatedBook, id);
        res.json({ message: `The book at ${id} has been updated`})

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})





export default router;