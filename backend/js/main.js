import executeQuery from "./db.js";
import readCSV from './read.js';

let fileContent = await readCSV('./csv/livros.csv');
fileContent.shift();

let query;
let params;
for (let row of fileContent) {
    row = row.split(';');

    query = `
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

    params = [
        row[2],
        row[0],
        row[1],
        row[4],
        row[3]
    ];

    await executeQuery(query, params);
};