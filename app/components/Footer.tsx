export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
          <div className="footer-about">
            <a className="brand footer-brand" href="#top" aria-label="VitrinaOps ana sayfa"><span className="brand-mark">v</span><span>vitrina<span className="brand-light">ops</span></span></a>
            <p>E-ticaret magazaniz icin urun gorseli duzenleme, katalog hazirlama ve urun girisi destegi. Siz listenizi paylasin, magazanizi satis icin hazirlayalim.</p>
          </div>
          <div className="footer-links footer-quick-links">
            <h2>Hizli erisim</h2>
            <a href="#hizmetler">Hizmetlerimiz</a>
            <a href="#nasil-calisir">Nasil calisiyoruz?</a>
            <a href="#platformlar">Desteklenen platformlar</a>
          </div>
          <div className="footer-links footer-work-links">
            <h2>Calisma alanlarimiz</h2>
            <a href="#hizmetler">E-ticaret kurulumu</a>
            <a href="#hizmetler">Urun girisi ve katalog</a>
            <a href="#hizmetler">Gorsel duzenleme ve SEO</a>
            <a href="#hizmetler">Magaza operasyon destegi</a>
          </div>
          <div className="footer-reach">
            <h2>Iletisim</h2>
            <p>merhaba@vitrinaops.com</p>
            <p>+90 555 123 45 67</p>
            <p>@vitrinaops</p>
          </div>
        </div>
      <div className="footer-bottom"><span>(c) 2026 VitrinaOps. Tum haklari saklidir.</span><span>E-ticaret operasyon destegi</span><a href="mailto:merhaba@vitrinaops.com">merhaba@vitrinaops.com</a></div>
      <section className="footer-art" aria-label="VitrinaOps: Urunleriniz magazaniza hazir">
          <span className="footer-art-word" aria-hidden="true">vitrinaops</span></section>
    </footer>
  );
}
