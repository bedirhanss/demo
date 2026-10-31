export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
          <div className="footer-about">
            <a className="brand footer-brand" href="#top" aria-label="VitrinaOps ana sayfa"><span className="brand-mark">v</span><span>vitrina<span className="brand-light">ops</span></span></a>
            <p>E-ticaret magazaniz icin urun gorseli duzenleme, katalog hazirlama ve urun girisi destegi. Siz listenizi paylasin, magazanizi satis icin hazirlayalim.</p>
          </div>
          <div className="footer-links">
            <h2>Hizli erisim</h2>
            <a href="#hizmetler">Hizmetlerimiz</a>
            <a href="#nasil-calisir">Nasil calisiyoruz?</a>
            <a href="#platformlar">Desteklenen platformlar</a>
          </div>
          <div className="footer-reach">
            <h2>Birlikte calisalim</h2>
            <p>Magazaniz veya projeniz icin ihtiyacinizi konusalim.</p>
            <a className="footer-contact" href="mailto:merhaba@vitrinaops.com"><span className="footer-contact-icon" aria-hidden="true">@</span><span>merhaba@vitrinaops.com</span><span className="footer-contact-arrow" aria-hidden="true">&#8599;</span></a>
          </div>
        </div>
      <div className="footer-bottom"><span>(c) 2026 VitrinaOps. Tum haklari saklidir.</span><span>E-ticaret operasyon destegi</span><a href="mailto:merhaba@vitrinaops.com">merhaba@vitrinaops.com</a></div>
      <section className="footer-art" aria-label="VitrinaOps: Urunleriniz magazaniza hazir">
          <span className="footer-art-word" aria-hidden="true">vitrinaops</span></section>
    </footer>
  );
}
