import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link className={styles.brand} href="/" aria-label="VitrinaOps ana sayfa">
          <span>vitrina<span className={styles.brandLight}>ops</span></span>
        </Link>
        <a className={styles.contact} href="mailto:merhaba@vitrinaops.com">Bize ulasin <span aria-hidden="true">↗</span></a>
      </header>

      <section className={styles.content} aria-labelledby="not-found-title">
        <div className={styles.visual} aria-hidden="true">
          <span className={styles.orbit} />
          <span className={styles.number}>404</span>
          <span className={styles.tag}>SAYFA BULUNAMADI</span>
        </div>
        <div className={styles.copy}>
          <p className={styles.eyebrow}><span /> VITRINAOPS</p>
          <h1 id="not-found-title">Aradiginiz sayfa<br /><em>vitrinde yok.</em></h1>
          <p className={styles.description}>Baglanti degismis ya da sayfa kaldirilmis olabilir. Dilerseniz ana sayfaya donup hizmetlerimizi kesfetmeye devam edin.</p>
          <Link className={styles.homeButton} href="/">Ana sayfaya don <span aria-hidden="true">&#8594;</span></Link>
        </div>
        <span className={styles.sideNote} aria-hidden="true">URUNLERINIZ MAGAZANIZA HAZIR</span>
      </section>

      <footer className={styles.footer}>
        <span>(c) 2026 VitrinaOps</span>
        <span>E-ticaret operasyon destegi</span>
        <a href="mailto:merhaba@vitrinaops.com">merhaba@vitrinaops.com</a>
      </footer>
    </main>
  );
}
