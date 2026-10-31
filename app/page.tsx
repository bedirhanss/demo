import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PricingSection from "./components/PricingSection";
import DeliveryCalculator from "./components/DeliveryCalculator";
import FAQSection from "./components/FAQSection";
import ProcessSection from "./components/ProcessSection";
import ServicesSection from "./components/ServicesSection";


const galleryItems = [
  { image: "1.jpg", category: "TEMA", title: "DOGAL" },
  { image: "2.jpg", category: "TEMA", title: "STUDYO" },
  { image: "3.jpg", category: "TEMA", title: "YUMUSAK ISIK" },
  { image: "5.jpg", category: "TEMA", title: "KOYU FON" },
  { image: "7.jpg", category: "TEMA", title: "EDITORIAL" },
  { image: "8.jpg", category: "TEMA", title: "RUSTIK" },
  { image: "11.jpg", category: "TEMA", title: "DOKULU FON" },
  { image: "12.jpg", category: "TEMA", title: "GUN ISIGI" },
  { image: "14.jpg", category: "TEMA", title: "MINIMAL" },
  { image: "15.jpg", category: "TEMA", title: "LIFESTYLE" },
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
    <>
      <Header />
      <main>
      <section className="intro-hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> E-TICARET OPERASYON DESTEGI</div>
          <h1>Urunlerinizi ekleyin.<br /><em>Biz gerisini</em> halledelim.</h1>
          <p className="hero-description">Urun listenizden profesyonel gorsellere, magazaniza hazir katalogdan urun girisine kadar e-ticaret operasyonunuzda yaninizdayiz.</p>
          <div className="hero-actions"><a className="button-primary" href="mailto:merhaba@vitrinaops.com">Ihtiyacinizi anlatin <span aria-hidden="true">&#8594;</span></a><a className="text-link" href="#hizmetler">Hizmetleri kesfet <span aria-hidden="true">&#8594;</span></a></div>
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


      <ServicesSection />

      <section className="gallery-section" id="galeri">
        <div className="gallery-heading">
          <div>
            <div className="eyebrow"><span className="eyebrow-dot" /> URUNLERINIZI EN IYI HALIYLE SUNUN</div>
            <h2>Urunleriniz icin<br /><em>profesyonel vitrin.</em></h2>
          </div>
          <p>Ham urun fotograflarindan magazaniza yuklemeye hazir gorsellere: urunlerinizi guven veren, duzenli bir katalog deneyimine donusturuyoruz.</p>
        </div>
        <div className="gallery-grid">
          {galleryItems.map((item, index) => (
            <article className="gallery-card" key={item.image} style={{ marginTop: index % 2 === 1 ? 36 : index % 5 === 2 ? 14 : 0, borderRadius: 5, backgroundColor: "#fff", boxShadow: "0 12px 28px rgba(23, 33, 29, 0.11)" }}>
              <div className="gallery-image-wrap" style={{ position: "relative", overflow: "hidden", aspectRatio: "3 / 4", width: "100%", borderRadius: 4, backgroundColor: "#e8ebe5" }}>
                <Image src={`/hero-library/${item.image}`} alt={item.title} fill sizes="(max-width: 600px) 46vw, (max-width: 1000px) 30vw, 19vw" style={{ objectFit: "cover" }} />
                <span className="gallery-index">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="gallery-card-meta" style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8, padding: "11px 10px 12px", backgroundColor: "#fff", color: "#111" }}><span style={{ flex: "0 0 48px", fontSize: 8, lineHeight: 1.4, letterSpacing: ".9px", color: "#111" }}>{item.category}</span><h3 style={{ flex: "1 1 auto", minWidth: 0, margin: 0, textAlign: "right", fontSize: 10, fontWeight: 500, lineHeight: 1.4, letterSpacing: ".3px", textTransform: "uppercase", color: "#111" }}>{item.title}</h3></div>
            </article>
          ))}
        </div>
      </section>

      <ProcessSection />


      <DeliveryCalculator />
      <FAQSection />
      <PricingSection />
      </main>
      <Footer />
    </>
  );
}
























