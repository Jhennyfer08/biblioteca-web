import styles from './register.module.css'
import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import { useState } from 'react';

export default function Register() {

    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [pages, setPages] = useState('');

    async function handleSubmit(event) {

        event.preventDefault();
        
        const book = {
            isbn,
            title,
            author,
            year,
            pages
        };

        try {
            const response = await fetch(
                'http://localhost:3000/books',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(book)
                }
            );

            const data = await response.json();

            console.log(data);
            alert('Livro cadastrado com sucesso!');
        } catch (error) {
            console.error(error);
        }
    }

    // async function editarBook(id, updateBook) {
    //     try {
    //         const response = await fetch(
    //             `http://localhost:3000/books/${id}`,
    //             {
    //                 method: 'PUT',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringfy(updateBook)
    //             }
    //         )
    //     } catch (error) {
            
    //     }
    // }

    return (
        <>
            <Header></Header>

            <div className={styles.bodyContent}>

                <div className={styles.formContainer}>

                    <form action="" className={styles.form} onSubmit={handleSubmit}>

                        <article className={styles.formGroup}>
                            <label htmlFor={styles.isbnInput}>ISBN: </label>
                            <input type="text" id={styles.isbnInput} value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
                            <span></span>
                        </article>

                        <article className={styles.formGroup}>
                            <label htmlFor={styles.titleInput}>Title: </label>
                            <input type="text" id={styles.titleInput} value={title} onChange={(e) => setTitle(e.target.value)} required />
                            <span></span>
                        </article>

                        <article className={styles.formGroup}>
                            <label htmlFor={styles.authorInput}>Author: </label>
                            <input type="text" id={styles.authorInput} value={author} onChange={(e) => setAuthor(e.target.value)} required />
                            <span></span>
                        </article>

                        <article className={styles.formGroup}>
                            <label htmlFor={styles.yearInput}>Year: </label>
                            <input type="text" id={styles.yearInput} value={year} onChange={(e) => setYear(e.target.value)} required />
                            <span></span>
                        </article>

                        <article className={styles.formGroup}>
                            <label htmlFor={styles.pagesInput}>Pages: </label>
                            <input type="text" id={styles.pagesInput} value={pages} onChange={(e) => setPages(e.target.value)} required />
                            <span></span>
                        </article>

                        <button className={styles.btn}> Register</button>
                    </form>

                </div>
            </div>

            <Footer></Footer>
        </>
    )
}