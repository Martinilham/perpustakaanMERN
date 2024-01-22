import express from 'express'
import {
    getbook,
    getBookById,
    saveBook,
    updateBook,
    deleteBook
} from '../controllers/userControllers.js';

const router = express.Router();

router.get('/books',getbook);
router.get('/books/:id',getBookById);
router.post('/books',saveBook);
router.patch('/books/:id',updateBook);
router.delete('/books/:id',deleteBook)

export default router