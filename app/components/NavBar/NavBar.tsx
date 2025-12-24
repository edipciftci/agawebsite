import Link from "next/link";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import styles from "./NavBar.module.css"

export default function NavBar(){
    return <header className={styles.header}>
        
        <div className={styles.inner}>
            <Link href="/" className={styles.brand}>
                <HeaderLogo/>
            </Link>

            <nav className={styles.nav}>
                <Link href="/" className={styles.link}>
                    Ana Sayfa
                </Link>
                <Link href="/takimlar" className={styles.link}>
                    Takımlar
                </Link>
                <Link href="/fikstur" className={styles.link}>
                    Fikstür
                </Link>
                <Link href="/haberler" className={styles.link}>
                    Haberler
                </Link>
                <Link href="/galeri" className={styles.link}>
                    Galeri
                </Link>
                <Link href="/iletisim" className={styles.link}>
                    İletişim
                </Link>
            </nav>
        </div>

    </header>;
}