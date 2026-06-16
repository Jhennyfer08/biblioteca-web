import { response } from "express";
import { executeQuery } from "../db.js";

class Books {
    constructor({ id = null, isbn, title, author, year, pages }) {
        this.id = id;
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.year = year;
        this.pages = pages;
    }

    normalize(text) {
        try {
            text = text.trim();
            text = text === "" ? null : text;
        } catch (error) {
            text = null;
        }

        return text;
    }


    async selectAuthor() {
        let query = `
                SELECT 
                    id, 
                    name 
                FROM 
                    authors
                WHERE 
                    name = ?
            `;

        let param = [
            this.normalize(this.author)
        ];

        try {
            let result = await executeQuery(query, param);
            return result[0][0].id;
        } catch (error) {
            return null;
        }
    }

    async insertAuthor() {
        let query = `
                INSERT INTO authors(
                    name 
                ) VALUES (
                    ?
                )
            `;

        let param = [this.normalize(this.author)];

        try {
            let result = await executeQuery(query, param);
            return result[0].insertId;
        } catch (error) {
            return null;
        }
    }

    static async selectBooks() {
        let query = `
                SELECT 
                    B.id,
                    isbn,
                    title,
                    author,
                    name,
                    year,
                    pages
                FROM 
                    books B
                JOIN 
                    authors A
                ON 
                    B.author = A.id
                ORDER BY 
                    id DESC
                LIMIT 
                    20
        `;

        let result = await executeQuery(query);
        return result[0];
    }

    async selectBookById() {
        let query = `
            SELECT 
                B.id,
                isbn,
                title,
                author,
                name,
                year,
                pages 
            FROM
                books B
            JOIN
                authors A
            ON
                B.author = A.id
            WHERE
                B.id = ?
            LIMIT 
                1
        `;

        let params = [
            this.id
        ];

        try { 
            let result = await executeQuery(query, params);
            return result[0];
        } catch (error) {
            return null;
        }
    }

    async insertBooks() {
        let authorId = await this.selectAuthor();

        if (!authorId) {
            authorId = await this.insertAuthor();
        }

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
        )`;

        let params = [
            this.normalize(this.isbn),
            this.normalize(this.title),
            authorId,
            this.normalize(this.year),
            this.pages
        ];

        let result = await executeQuery(query, params);
        this.id = result[0].insertId;
    }

    async deleteBooks() {
        let query = `

            DELETE FROM 
                books
            WHERE 
                id = ?
        `;

        let params = [this.id];

        await executeQuery(query, params);
    }

    async updateBooks() {
        let authorId = await this.selectAuthor();

        if (!authorId) {
            authorId = await this.insertAuthor();
        }

        let query = `
            UPDATE 
                books
            SET 
                isbn = ?,
                title = ?,
                author = ?,
                year = ?,
                pages = ?
            WHERE 
                id = ?
        `;

        let params = [
            this.normalize(this.isbn),
            this.normalize(this.title),
            authorId,
            this.normalize(this.year),
            this.pages,
            this.id
        ];

        await executeQuery(query, params);
    }
}

export { Books };