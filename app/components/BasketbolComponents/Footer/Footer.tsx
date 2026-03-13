import Link from "next/link";
import styles from "./Footer.module.css";
import { Instagram, Phone, Mail, MapPin, House } from "lucide-react";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.left}>
                <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className={styles.iconLink}
                >
                    <Instagram size={20} />
                </a>

                <a
                    href="tel:+905555555555"
                    aria-label="Telefon"
                    className={styles.iconLink}
                >
                    <Phone size={20} />
                </a>

                <a
                    href="mailto:info@example.com"
                    aria-label="E-posta"
                    className={styles.iconLink}
                >
                    <Mail size={20} />
                </a>

                <a
                    href="https://maps.google.com/?q=Ankara"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Konum"
                    className={styles.iconLink}
                >
                    <MapPin size={20} />
                </a>
            </div>

            <div className={styles.center}>
                <span className={styles.brand}>Ankara Genç Akademi Basketbol SK</span>
            </div>

            <div className={styles.right}>
                <Link href="/" className={styles.homeButton}>
                    <House size={18} />
                    <span>Başlangıç</span>
                </Link>
            </div>
        </footer>
    );
}