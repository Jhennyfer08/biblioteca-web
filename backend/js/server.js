import express from 'express';
import {Books} from './classes/books.js';
await process.loadEnvFile('.env');

const app = express();
app.use(express.json());


app.get('/books', async (req, res) => {
    const books = await Books.selectBooks();
    res.send(books);
});

app.post('/books', async (req, res) => {

    const body = req.body
    const book = new Books(body);
    await book.insertBooks();
    res.send(
        { insertId: book.id}
    );
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`);
});

