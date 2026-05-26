-- Active: 1778547260903@@127.0.0.1@3306
DROP DATABASE IF EXISTS library;
CREATE DATABASE IF NOT EXISTS library;
USE library;


CREATE TABLE IF NOT EXISTS authors(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(250) NOT NULL UNIQUE 
)

CREATE TABLE IF NOT EXISTS books(
    id INT PRIMARY KEY AUTO_INCREMENT,
    isbn VARCHAR(16) NOT NULL UNIQUE,
    title VARCHAR(250) NOT NULL,
    year CHAR(4),
    pages INT,
    author INT NOT NULL,

    FOREIGN KEY (author) REFERENCES authors(id) 
);

-- INSERT INTO authors(
--     name 
-- ) VALUES (
--     ?
-- );

-- INSERT INTO books(
--     isbn,
--     title,
--     author,
--     year,
--     pages
-- ) VALUES (
--     ?,
--     ?,
--     ?,
--     ?
-- );

-- SELECT 
--     id, 
--     name 
-- FROM 
--     authors
-- WHERE 
--     name = 'albert';

