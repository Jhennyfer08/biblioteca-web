import express from 'express';
import { Books } from './classes/books.js';
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
    
    try {
        await book.insertBooks();
        res.send({
            message: `Livro ${book.id} cadastrado com sucesso.`
        });
    } catch (error) {
        res.send({
            message: `Não foi possível cadastrar.`
        });
    }

});

app.delete('/books/:id', async (req, res) => {
    const book = new Books({
        id: req.params.id
    });

    await book.deleteBooks();

    res.send({
        message: `Livro ${book.id} excluído com sucesso.`
    });
});

app.put('/books/:id', async (req, res) => {
    const book = new Books({
        id: req.params.id,
        ...req.body
    });

    await book.updateBooks();

    res.send({
        message: `Livro ${book.id} atualizado com sucesso.`
    });
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`);
});