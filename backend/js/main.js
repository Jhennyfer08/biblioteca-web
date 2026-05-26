import executeQuery from "./db.js";
import readCSV from './read.js';
await process.loadEnvFile('.env');

function normalize(text) {
    
    try {
        text = text.trim();
        text = text === "" ? null : text;
    } catch (error) {
        text = null;
    }

    return text;
}

async function selectAuthor(row) {

    let query;
    let param;

    query = `
        SELECT 
            id, 
            name 
        FROM 
            authors
        WHERE 
            name = ?
    `;

    param = [normalize(row[1])];

    try {
        let result = await executeQuery(query, param);
        return result[0][0].id;
    } catch (error) {
        return null;
    }
}

async function insertAuthor(row) {

    let query;
    let param;

    query = `
        INSERT INTO authors(
            name 
        ) VALUES (
            ?
        )
    `;

    param = [normalize(row[1])];

    try {
        let result = await executeQuery(query, param);
        return result[0].insertId;
    } catch (error) {
        return null;
    }
}

async function insertBooks(row, idAuthor) {

    let query;
    let params;

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
        normalize(row[2]),
        normalize(row[0]),
        idAuthor,
        normalize(row[4]),
        normalize(row[3])
    ];

    await executeQuery(query, params);
}

async function main() {
    let fileContent = await readCSV('./csv/livros.csv');
    let idAuthor;
    fileContent.shift();


    for (let row of fileContent) {

        row = row.split(';');

        idAuthor = await selectAuthor(row);
        if (idAuthor) {
            await insertBooks(row, idAuthor);
        } else {
            idAuthor = await insertAuthor(row);
            await insertBooks(row, idAuthor);
        }
    };
}

await main();