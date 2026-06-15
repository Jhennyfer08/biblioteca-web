import styles from './register.module.css'
import Header from '../../components/header/header.jsx'
import Footer from '../../components/footer/footer.jsx'

export default function Register() {
    return (
        <>
            <Header></Header>

            <div className={styles.formContainer}>

                <form action="post" className={styles.form}>
                    
                    <article className={styles.formGroup}>
                        <label htmlFor="isbnInput">ISBN: </label>
                        <input type="text" id={styles.isbnInput} required/>
                        <span></span>
                    </article>

                    <article className={styles.formGroup}>
                        <label htmlFor="titleInput">Title: </label>
                        <input type="text" id={styles.titleInput} required/>
                        <span></span>
                    </article>

                    <article className={styles.formGroup}>
                        <label htmlFor="authorInput">Author: </label>
                        <input type="text" id={styles.authorInput} required/>
                        <span></span>
                    </article>

                    <article className={styles.formGroup}>
                        <label htmlFor="yearInput">Year: </label>
                        <input type="text" id={styles.yearInput} required/>
                        <span></span>
                    </article>

                    <article className={styles.formGroup}>
                        <label htmlFor="pagesInput">Pages: </label>
                        <input type="text" id={styles.pagesInput} required/>
                        <span></span>
                    </article>

                    <button className={styles.btn}> Register</button>
                </form>

            </div>

            <Footer></Footer>
        </>
    )
}