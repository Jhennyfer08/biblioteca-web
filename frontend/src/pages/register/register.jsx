import styles from './register.module.css'
import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'
import { useState, useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';

export default function Register() {

    const navigate = useNavigate();
    const { id } = useParams();
    const { state } = useLocation();
    const selectedBook = state ? state.book : undefined;
    console.log(selectedBook);
    
    const [book, setBook] = useState({
        isbn: '',
        title: '',
        author: '',
        year: '',
        pages: ''
    });
    
    async function handleSubmit(event) {

        
        event.preventDefault();

        try {
            const response = await fetch(
                'http://localhost:3000/books',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(book)
                }
            );

            const data = await response.json();
            alert('Livro cadastrado com sucesso!');

            navigate('/');
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        function loadBook() {
            if (!selectedBook) return

            try {
                setBook({
                    isbn: selectedBook.isbn,
                    title: selectedBook.title,
                    author: selectedBook.name,
                    year: selectedBook.year,
                    pages: selectedBook.pages
                });
            } catch (error) {
                console.error(error);
            }
        }
        loadBook();

    }, [selectedBook]);

    function handleChange(event) {
        const { name, value } = event.target;

        setBook(prev => ({
            ...prev,
            [name]: value
        }));
    }

    async function updateBook(event) {

        event.preventDefault();

        try {

            const response = await fetch(
                `http://localhost:3000/books/${id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(book)
                }
            )

            if (!response.ok) {
                throw new Error('Erro ao atualizar livro');
            }

            const data = await response.json();
            alert('Livro atualizado com sucesso!');
            navigate('/');

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Header></Header>

            <main>
                <div className={styles.bodyContent}>

                    <div className={styles.formContainer}>

                        <form action="" className={styles.form} onSubmit={id ? updateBook : handleSubmit}>

                            <article className={styles.formGroup}>
                                <label htmlFor={styles.isbnInput}>ISBN: </label>
                                <input type="text" id={styles.isbnInput} name="isbn" value={book.isbn} onChange={handleChange} required />
                                <span></span>
                            </article>

                            <article className={styles.formGroup}>
                                <label htmlFor={styles.titleInput}>Title: </label>
                                <input type="text" id={styles.titleInput} name="title" value={book.title} onChange={handleChange} required />
                                <span></span>
                            </article>

                            <article className={styles.formGroup}>
                                <label htmlFor={styles.authorInput}>Author: </label>
                                <input type="text" id={styles.authorInput} name="author" value={book.author} onChange={handleChange} required />
                                <span></span>
                            </article>

                            <article className={styles.formGroup}>
                                <label htmlFor={styles.yearInput}>Year: </label>
                                <input type="text" id={styles.yearInput} name="year" value={book.year} onChange={handleChange} required />
                                <span></span>
                            </article>

                            <article className={styles.formGroup}>
                                <label htmlFor={styles.pagesInput}>Pages: </label>
                                <input type="text" id={styles.pagesInput} name="pages" value={book.pages} onChange={handleChange} required />
                                <span></span>
                            </article>

                            <button className={styles.btn}> {id ? 'Update' : 'Register'}</button>
                        </form>

                    </div>
                </div>
            </main>

            <Footer></Footer>
        </>
    )
}