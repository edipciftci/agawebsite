import type { Metadata } from "next";
import "../globals.css";
import NavBar from "../components/BasketbolComponents/NavBar"
import Footer from "../components/BasketbolComponents/Footer";
import styles from "./layout.module.css";
import TeamLogo from "../components/BasketbolComponents/TeamLogo";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Ankara Genç Akademi",
  description: "Ankara Genç Akademi BSK Resmi Sayfası",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <TeamLogo />
      <div className={styles.topSpacer}/>
      <div className={styles.navbarWrap}>
        <NavBar />
      </div>

      <main className={styles.page}>{children}</main>

      <footer className={styles.footerWrap}>
        <Footer />
      </footer>

    </>
  );
}
