import Link from "next/link";
import HeaderLogo from "../HeaderLogo";
import styles from "./NavBar.module.css";

const LINKS = [
    { href: "/basketbol/", label: "Ana Sayfa" },
    { href: "/basketbol/takimlar", label: "Takımlar" },
    { href: "/basketbol/fikstur", label: "Fikstür" },
    { href: "/basketbol/haberler", label: "Haberler" },
    { href: "/basketbol/galeri", label: "Galeri" },
    { href: "/basketbol/dökümanlar", label: "Dökümanlar" },
    { href: "/basketbol/kayit", label: "Kayıt" },
    { href: "/basketbol/iletisim", label: "İletişim" }
];

export default function NavBar(){
    return (
        <header className={styles.header}>
        
        <div className={styles.inner}>
            <Link href="/basketbol/" className={styles.brand}>
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