import { useEffect, useState } from 'react';
import styles from './bookDisplay.module.css';


export default function BookDisplay() {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        async function loadBooks() {
            try {
                const response = await fetch('http://localhost:3000/books');
                const data = await response.json();

                setBooks(data);
            } catch (error) {

                console.error('Erro ao buscar livros:', error);
            }
        }

        loadBooks();
    }, []);

    return (
        <div className={styles.tableContainer}>
            <table>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Year</th>
                        <th>Pages</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {books.map((book) => (

                        <tr key={book.id}>
                            <td>{book.isbn}</td>
                            <td>{book.author}</td>
                            <td>{book.title}</td>
                            <td>{book.year}</td>
                            <td>{book.pages}</td>
                            <td>
                                <button className={styles.btn} id={styles.editBtn}>Editar</button>
                            </td>
                            <td>
                                <button className={styles.btn} id={styles.deleteBtn}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}