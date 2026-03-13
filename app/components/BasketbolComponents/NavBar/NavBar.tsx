import Link from "next/link";
import HeaderLogo from "../HeaderLogo";
import styles from "./NavBar.module.css";

const LINKS = [
    { href: "/", label: "Ana Sayfa" },
    { href: "/takimlar", label: "Takımlar" },
    { href: "/fikstur", label: "Fikstür" },
    { href: "/haberler", label: "Haberler" },
    { href: "/galeri", label: "Galeri" },
    { href: "/dökümanlar", label: "Dökümanlar" },
    { href: "/kayit", label: "Kayıt" },
    { href: "/iletisim", label: "İletişim" }
];

export default function NavBar(){
    return (
        <header className={styles.header}>
        
        <div className={styles.inner}>
            <Link href="/" className={styles.brand}>
                <HeaderLogo className={styles.logo} size={144}/>
            </Link>

            <nav className={styles.nav}>
                <ul className={styles.menu}>
                    {LINKS.map((l) => (
                        <li key={l.href} className={styles.menuItem}>
                            <Link href={l.href} className={styles.link}>
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

        </header>
    );
}