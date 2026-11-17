import fs from 'node:fs/promises';

async function readCSV(filePath) {
    try {
        let fileContent = await fs.readFile(filePath, 'utf8');
        console.log(fileContent);
        
        fileContent = fileContent.split('\n');
        console.log(fileContent);
        return fileContent;
    } catch (error) {
        console.log(`Identified error on readCSV: ${error}`);
    }
}

export {readCSV};

// let fileContent = await read('./csv/livros.csv');

// console.log(fileContent[0]);


// fileContent.forEach(line => {
//     console.log(line.split(';'));
// });
