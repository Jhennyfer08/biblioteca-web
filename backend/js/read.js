import fs from 'node:fs/promises';

async function readCSV(filePath) {
    try {
        let fileContent = await fs.readFile(filePath, 'utf8');
        fileContent = fileContent.split('\n');
        return fileContent;
    } catch (error) {
        console.log(`Identified error on readCSVCSV: ${error}`);
    }
}

// let fileContent = await read('./csv/livros.csv');

// console.log(fileContent[0]);


// fileContent.forEach(line => {
//     console.log(line.split(';'));
// });

export default readCSV;