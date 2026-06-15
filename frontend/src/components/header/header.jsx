import styles from './header.module.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { LuShoppingBag } from 'react-icons/lu';
import { RiArrowGoBackLine, RiBookFill } from "react-icons/ri";

export default function Header() {
    return (
        <nav className={styles.navBarContainer}>

        <Link to={'/'}>
            <h1 className={styles.link}>Lib.go</h1>
        </Link>

            <div className={styles.navBarMenu}>
                <LuShoppingBag className={styles.menuIcon} />

                <Link to= '/book-register'>
                    <RiBookFill className={styles.menuIcon} />
                </Link>

                <RiArrowGoBackLine className={styles.menuIcon} />
            </div>
        </nav>
    )
}


