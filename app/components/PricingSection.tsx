"use client";

import { useEffect, useState } from "react";

const packages = [
  { number: "01 / GORSEL", title: "Urun Gorseli", description: "Ham fotograflarinizi magazanizda kullanima hazir hale getirelim.", price: "4.500 TL", note: "Temsili paket fiyati", limit: "Bu paket en fazla 100 urunu kapsar. Ek urunlerde fiyat degiskenlik gosterebilir.", features: ["Urun fotograflarini duzenleme", "Gorsel boyutlarini platforma uyarlama", "Dengeli katalog gorunumu"], subject: "Urun%20gorseli%20paketi", link: "Bu paketi konusalim" },
  { number: "02 / KATALOG", title: "Magaza Kurulumu", description: "Urun listenizden duzenli ve yayina hazir bir katalog olusturalim.", price: "9.500 TL", note: "Temsili paket fiyati", limit: "Bu paket en fazla 100 urunu kapsar. Ek urunlerde fiyat degiskenlik gosterebilir.", features: ["Urun bilgilerinin duzenlenmesi", "Fotograf duzenleme ve urun girisi", "Platforma uygun katalog duzeni"], subject: "Magaza%20kurulumu%20paketi", link: "Bu paketi konusalim", featured: true },
  { number: "03 / SUREKLI DESTEK", title: "Operasyon Destegi", description: "Mevcut magazanizin urun ve katalog islerini birlikte yurutelim.", price: "7.500 TL / Ay", note: "Temsili aylik paket fiyati", limit: "", features: ["Duzenli urun ekleme", "Katalog guncelleme ve kontrol", "Ihtiyaca gore esnek is birligi"], subject: "Operasyon%20destegi", link: "Ihtiyacinizi anlatin" },
];

export default function PricingSection() {
  const [mobile, setMobile] = useState(false);
  const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);
  useEffect(() => {
    const update = () => setMobile(window.innerWidth <= 700);
    update(); window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const sectionStyle: React.CSSProperties = { maxWidth: 1240, margin: "0 auto", padding: mobile ? "64px 22px 70px" : "92px 56px 100px", color: "#17211d" };
  const headingStyle: React.CSSProperties = { display: mobile ? "block" : "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, marginBottom: 36 };
  const gridStyle: React.CSSProperties = { display: "grid", gridTemplateColumns: mobile ? "1fr" : "repeat(3,minmax(0,1fr))", gap: 14, alignItems: "stretch" };

  return (
    <section className="pricing-section" id="paketler" style={sectionStyle}>
      <div className="pricing-heading" style={headingStyle}>
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> ESNEK PAKETLER, NET IS AKISI</div>
          <h2 style={{ margin: "18px 0 0", fontSize: mobile ? 36 : 42, lineHeight: 1.1, letterSpacing: "-1.8px", fontWeight: 600 }}>Size uygun destek,<br /><em style={{ fontFamily: "Georgia,serif", color: "#64876b", fontWeight: 400 }}>ihtiyaciniza gore.</em></h2>
        </div>
        <p style={{ width: mobile ? "auto" : 350, margin: mobile ? "14px 0 0" : "0 0 4px", color: "#747d76", fontSize: mobile ? 12 : 13, lineHeight: 1.8 }}>Her magazanin urun sayisi ve ihtiyaci farkli. Kapsami birlikte belirleyelim; size ozel, net bir teklif hazirlayalim.</p>
      </div>
      <div className="pricing-grid" style={gridStyle}>
        {packages.map((item) => {
          const featured = Boolean(item.featured);
          const fg = featured ? "#f7f7f4" : "#17211d";
          return (
            <article className={`pricing-card${featured ? " pricing-card-featured" : ""}`} key={item.number} onMouseEnter={() => setHoveredPackage(item.number)} onMouseLeave={() => setHoveredPackage(null)} onFocus={() => setHoveredPackage(item.number)} onBlur={() => setHoveredPackage(null)} style={{ position: "relative", display: "flex", flexDirection: "column", minWidth: 0, padding: mobile ? "24px 21px 19px" : "27px 25px 23px", border: `1px solid ${featured ? "#183f33" : "#e5e8e1"}`, borderRadius: 5, background: featured ? "#183f33" : "#fff", color: fg, transform: hoveredPackage === item.number ? "translateY(-5px)" : "translateY(0)", boxShadow: hoveredPackage === item.number ? "0 18px 36px rgba(23, 33, 29, 0.16)" : "0 12px 28px rgba(23, 33, 29, 0.11)", transition: "transform .24s ease, box-shadow .24s ease" }}>
              {featured && <span className="pricing-badge" style={{ position: "absolute", top: 14, right: 14, padding: "6px 8px", borderRadius: 2, background: "#c9ee79", color: "#193e31", fontSize: 7, letterSpacing: ".6px" }}>EN COK TERCIH EDILEN</span>}
              <span style={{ color: featured ? "#c3d1c4" : "#7b887d", fontSize: 8, letterSpacing: "1.2px" }}>{item.number}</span>
              <h3 style={{ margin: "21px 0 8px", color: featured ? "#fff" : "#1d2a22", fontSize: mobile ? 18 : 20, fontWeight: 600, letterSpacing: "-.6px" }}>{item.title}</h3>
              <p style={{ minHeight: mobile ? 0 : 42, margin: 0, color: featured ? "#c3d1c4" : "#747d76", fontSize: 11, lineHeight: 1.7 }}>{item.description}</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 3, margin: "20px 0 17px", paddingBottom: 17, borderBottom: `1px solid ${featured ? "#ffffff30" : "#e9ece6"}` }}><strong style={{ color: featured ? "#fff" : "#244d38", fontSize: 19 }}>{item.price}</strong><span style={{ color: featured ? "#c3d1c4" : "#899189", fontSize: 9 }}>{item.note}</span></div>
              {item.limit && <p style={{ margin: "-3px 0 18px", color: featured ? "#d7e3d5" : "#737e74", fontSize: 9, lineHeight: 1.55 }}>{item.limit}</p>}
              <div role="list" style={{ display: "grid", gap: 11, margin: "0 0 24px" }}>{item.features.map((feature) => <div role="listitem" key={feature} style={{ position: "relative", paddingLeft: 17, color: featured ? "#e2e9e0" : "#59655b", fontSize: 10, lineHeight: 1.5 }}><svg aria-hidden="true" viewBox="0 0 16 16" width="12" height="12" style={{ position: "absolute", left: 0, top: 2, color: featured ? "#c9ee79" : "#71936d" }}><path d="m3 8 3.2 3.2L13 4.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>{feature}</div>)}</div>
              <a href={`mailto:merhaba@vitrinaops.com?subject=${item.subject}`} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, marginTop: "auto", paddingTop: 14, borderTop: `1px solid ${featured ? "#ffffff30" : "#e9ece6"}`, color: featured ? "#fff" : "#294b38", fontSize: 10, fontWeight: 600 }}>{item.link}<span aria-hidden="true" style={{ fontSize: 16 }}>&#8594;</span></a>
            </article>
          );
        })}
      </div>
      <p style={{ display: "flex", alignItems: "center", gap: 8, margin: "18px 0 0", color: "#828b83", fontSize: 9 }}><span aria-hidden="true" style={{ display: "grid", placeItems: "center", width: 14, height: 14, border: "1px solid #cbd5c7", borderRadius: "50%" }}>i</span> Fiyatlar su an icin temsili ornektir. Kesin kapsam ve fiyat, ihtiyaciniza gore belirlenir.</p>
    </section>
  );
}





