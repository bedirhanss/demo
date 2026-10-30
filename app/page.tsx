import Image from "next/image";

const services = [
  { number: "01", title: "Urun girisi ve katalog yonetimi", text: "Urun listenizi duzenli, eksiksiz ve satis icin hazir bir kataloga donusturuyoruz." },
  { number: "02", title: "Urun gorseli duzenleme", text: "Ham urun fotograflarinizi magazanizin diline uygun, profesyonel gorsellere hazirliyoruz." },
  { number: "03", title: "Magaza operasyon destegi", text: "Mevcut magazanizda urunlerinizi dogru alanlara ekliyor, operasyon yukunuzu hafifletiyoruz." },
];

const platforms = [
  { name: "Shopify", logo: "/logos/shopify.svg" },
  { name: "WooCommerce", logo: "/logos/woocommerce-wordmark.svg" },
  { name: "Wix", logo: "/logos/wix.svg" },
  { name: "PrestaShop", logo: "/logos/prestashop.svg" },
  { name: "BigCommerce", logo: "/logos/bigcommerce.svg" },
  { name: "ikas", logo: "/logos/ikas.svg" },
  { name: "Etsy", logo: "/logos/etsy.svg" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="VitrinaOps home"><span>vitrina<span className="brand-light">ops</span></span></a>
        <nav className="main-nav" aria-label="Main menu">
          <a href="#hizmetler">Hizmetler</a><a href="#nasil-calisir">Nasil calisir?</a><a href="#platformlar">Platformlar</a>
        </nav>
        <div className="header-contact-slot"><div className="aura aura-glow aura-sm header-contact-aura"><a className="header-cta" href="tel:+905555555555" aria-label="Bize ulasin"><svg className="phone-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" width="20" height="20"><path d="M7.2 3.8h2.7l1.3 4-1.8 1.8a15 15 0 0 0 5 5l1.8-1.8 4 1.3v2.7c0 1.1-.9 2-2 2A15.2 15.2 0 0 1 5.2 5.8c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg><span className="header-cta-label" aria-hidden="true">Bize ulasin</span></a></div></div>
      </header>

      <section className="intro-hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> E-TICARET OPERASYON DESTEGI</div>
          <h1>Urunlerinizi ekleyin.<br /><em>Biz gerisini</em> halledelim.</h1>
          <p className="hero-description">Urun listenizden profesyonel gorsellere, magazaniza hazir katalogdan urun girisine kadar e-ticaret operasyonunuzda yaninizdayiz.</p>
          <div className="hero-actions"><a className="button-primary" href="mailto:merhaba@vitrinaops.com">Ihtiyacinizi anlatin <span>?</span></a><a className="text-link" href="#hizmetler">Hizmetleri kesfet <span>?</span></a></div>
        </div>
        <div className="hero-visual" aria-label="3D product photography card">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="hover-3d hero-3d-scene">
            <article className="card hero-product-card">
              <figure className="hero-product-image"><Image src="/hero-library/5.jpg" alt="Retouched copper cuff bracelet product photo" fill sizes="(max-width: 600px) 70vw, 24vw" priority /></figure>
              <div className="hero-card-shade" />
              <div className="hero-card-topline"><span>VITRINAOPS STUDIO</span><span>01 / 01</span></div>
              <div className="hero-card-copy"><span>PRODUCT PHOTOGRAPHY</span><h2>Every detail,<br />ready to sell.</h2><p>Studio retouching ? Catalog-ready</p></div>
            </article>
            <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
          </div>
          <div className="hero-services-list" aria-label="Product support services">
            <div className="hero-service-row"><span>01</span><i /><span>PRODUCT PHOTO RETOUCHING</span></div>
            <div className="hero-service-row"><span>02</span><i /><span>PRODUCT LISTING</span></div>
            <div className="hero-service-row"><span>03</span><i /><span>CATALOG MANAGEMENT</span></div>
          </div>
        </div>
      </section>

      <section className="platform-strip" id="platformlar"><span className="platform-intro">HER E-COMMERCE PLATFORMU ICIN DESTEK</span><div className="platform-marquee" aria-label="Supported e-commerce platforms"><div className="marquee-track">{[0, 1].map((group) => <div className="platform-list" key={group} aria-hidden={group === 1 ? "true" : undefined}>{platforms.map((platform) => <div className="platform-logo" key={platform.name}><Image className={platform.name === "WooCommerce" ? "woocommerce-logo" : ""} src={platform.logo} alt={group === 0 ? platform.name : ""} width={platform.name === "WooCommerce" ? 128 : 145} height={platform.name === "WooCommerce" ? 43 : 30} /></div>)}</div>)}</div></div></section>

      <section className="services-section" id="hizmetler"><div className="section-heading"><div><div className="eyebrow"><span className="eyebrow-dot" /> ISINIZI KOLAYLASTIRAN DESTEK</div><h2>Magazanizin arka plani<br />bizim <em>isimiz.</em></h2></div><p>Ister yeni bir magaza acin ister mevcut katalogunuzu buyutun; ihtiyaciniza gore birlikte sekillenen pratik destek.</p></div>
        <div className="service-grid">{services.map((service) => <article className="service-card" key={service.number}><span className="service-number">{service.number}</span><div className="service-arrow">?</div><h3>{service.title}</h3><p>{service.text}</p></article>)}</div>
      </section>

      <section className="process-band" id="nasil-calisir"><div><span className="process-kicker">GETTING STARTED IS SIMPLE</span><h2>Listenizi paylasin.<br /><em>Magazaniz hazir olsun.</em></h2></div><a className="button-light" href="mailto:merhaba@vitrinaops.com">Birlikte baslayalim <span>?</span></a><span className="process-decoration">v.</span></section>

      <footer className="site-footer"><div className="footer-main"><a className="brand footer-brand" href="#top"><span className="brand-mark">v<span>.</span></span><span>vitrina<span className="brand-light">ops</span></span></a><p>E-commerce operations,<br />made easier.</p><a className="footer-contact" href="mailto:merhaba@vitrinaops.com">merhaba@vitrinaops.com <span>?</span></a></div><div className="footer-bottom"><span>(c) 2026 VitrinaOps</span><a href="#top">Yukari don ?</a></div></footer>
    </main>
  );
}
