-- Active: 1779145650504@@127.0.0.1@3306@library
DROP DATABASE IF EXISTS library;
CREATE DATABASE IF NOT EXISTS library;
USE library;

CREATE TABLE IF NOT EXISTS books(
    id INT PRIMARY KEY AUTO_INCREMENT,
    isbn VARCHAR(16) NOT NULL UNIQUE,
    title VARCHAR(250) NOT NULL,
    author VARCHAR(150) NOT NULL,
    year CHAR(4),
    pages INT
);

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

