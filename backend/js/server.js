import express from 'express';
import executeQuery from './db.js';
await process.loadEnvFile('.env');

const app = express();
app.use(express.json());

app.get('/hello', async (req, res) => {
    res.send({
        status: 'Hello World'
    });
});

app.post('/hello', async (req, res) => {
    let name = req.body.name;
    res.send({
        status: `Hello ${name}`
    });
});

// app.get('/books', async (req, res) => {
//     let query = `
//         SELECT 
//             books.id,
//             isbn,
//             title,
//             author,
//             name,
//             year,
//             pages
//         FROM 
//             books 
//         JOIN 
//             authors 
//         ON 
//             books.author = authors.id
//         LIMIT 
//             20
//     `;

//     let result = await executeQuery(query);

//     res.send(result[0]);
// });

app.post('/books', async (req, res) => {
    let query = `
        INSERT INTO books(
            isbn,
            title,
            author,
            year,
            pages
        ) VALUES (
            ?,
            ?,
            ?,
            ?,
            ?
        )
   `;

    let params = [
        req.body.isbn,                
        req.body.title,
        req.body.author,
        req.body.year,
        req.body.pages
    ];

    let result = await executeQuery(query, params);
    res.send({ insertId: result[0].insertId});
});

"0192837465",
        "Quarto de Despejo",
        "Carolina Maria de Jesus",
        2011,
        542

app.get('/teste', async (req, res) => {
    let query = `
        SELECT 
            isbn,
            title,
            author,
            year,
            pages
        FROM 
            books 
        WHERE
            id = 10415
    `;

    let result = await executeQuery(query);
    res.send(result[0]);
})


const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port: http://localhost:${port}`);
});