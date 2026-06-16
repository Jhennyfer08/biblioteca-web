import { useEffect, useState } from 'react';
import styles from './bookDisplay.module.css';
import { useNavigate } from 'react-router-dom';


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

    async function deleteBook(id) {
        try {
            const response = await fetch(`http://localhost:3000/books/${id}`, { method: 'DELETE' });

            setBooks(prev =>
                prev.filter(book => book.id !== id)
            );
        } catch (error) {
            console.error('Erro ao excluir livros, livro não encontrado:', error);
        }
    }

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
                            <td>{book.title}</td>
                            <td>{book.name}</td>
                            <td>{book.year}</td>
                            <td>{book.pages}</td>
                            <td>
                                <button className={styles.btn} id={styles.editBtn} onClick={() => Navigate(`/edit/${book.id}`)}>Editar</button>
                            </td>
                            <td>
                                <button className={styles.btn} id={styles.deleteBtn} onClick={() => deleteBook(book.id)}>Excluir</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}