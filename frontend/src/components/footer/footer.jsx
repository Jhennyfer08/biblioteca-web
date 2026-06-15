import styles from './footer.module.css';
import { LuInstagram, LuFacebook} from 'react-icons/lu';
import { FaWhatsapp } from "react-icons/fa6";

export default function Footer(){

    return(
        <footer className={styles.footerContainer}>
            <div className={styles.contactIcon}>
                <LuInstagram />
                <LuFacebook />
                <FaWhatsapp />
            </div>

            <div className={styles.footerInfo}>
                <a href="">Sobre</a>
                <a href="">Termos de Uso</a>
                <a href="">Política de Privacidade</a>
            </div>

            <div className={styles.footerCopyRight}>
                <p>&copy; 2026 All rights reserved to Lib.go</p>
            </div>
        </footer>
    )
}