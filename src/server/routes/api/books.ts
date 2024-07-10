import { Router } from 'express';
import db from '../../db';
import tokenCheck from '../../middlewares/tokenCheck';
import Swal from 'sweetalert2';

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
        console.log(newBook);
        const result = await db.books.insert(newBook);
        res.json({ message: 'New Author added', id: result.insertId});
        Swal.fire({
            title: "Custom width, padding, color, background.",
            width: 600,
            padding: "3em",
            color: "#716add",
            background: "#fff",
            backdrop: `
                      rgba(0,0,123,0.4)
                    `,
          });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal Server Error', error})
    }
})

router.post('/', tokenCheck, async (req, res) => {
    try {
        const { title, price, author, category_id} = req.body

        //checker to see if we have all of the necessary data

        if(!title || !price || !author || !category_id) {
            return res.status(400).json({ message: 'Missing one or more of'})
        }
        const results = await db.books.insert({ title, price, author, category_id});
        res.status(201).json({ message: 'Yes! We added your book!', id: results.insertId})
    } catch (error) {
        res.status(500).json({ message: 'Could not create the book - internal server error'})
        console.log(error)
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