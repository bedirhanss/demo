"use client";

import { useEffect, useState } from "react";

const services = [
  { icon: "store", type: "KURULUM", title: "E-ticaret sistemi kurulumu", description: "Pazaryerlerinde veya kendi web sitenizde satis yapmaya baslarken, ihtiyaciniza uygun e-ticaret altyapisini kurup magazanizi urun girisine hazirliyoruz." },
  { icon: "catalog", type: "KATALOG", title: "Urun girisi ve katalog yonetimi", description: "Urun listenizi kategori, varyant ve gerekli bilgilerle duzenli bir katalog yapisina donusturuyor; urunlerinizi ilgili platformlara ekliyoruz." },
  { icon: "image", type: "URUN ICERIGI", title: "Gorsel duzenleme ve SEO uyumlu icerik", description: "Ham urun fotograflarini magazanizin gorsel diline gore iyilestiriyor; urun baslik ve aciklamalarini arama gorunurlugu gozetilerek hazirliyoruz." },
  { icon: "operations", type: "OPERASYON", title: "Magaza operasyon destegi", description: "Mevcut magazanizdaki urun ekleme, katalog duzenleme ve icerik guncelleme islerini ustlenerek gunluk operasyon yukunu hafifletiyoruz." },
];

function ServiceIcon({ name }: { name: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.35, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="19" height="19" {...common}>
      {name === "store" && <><path d="M3.5 10 5.3 4h13.4l1.8 6" /><path d="M4.5 10v9.5h15V10M9 19.5v-6h6v6" /><path d="M3.5 10a2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0 2.5 2.5 0 0 0 5 0" /></>}
      {name === "catalog" && <><rect x="4" y="4" width="6" height="7" rx="1" /><rect x="14" y="4" width="6" height="7" rx="1" /><path d="M4 15h16M4 19h12" /></>}
      {name === "image" && <><rect x="3.5" y="4" width="17" height="16" rx="2" /><circle cx="9" cy="9" r="1.5" /><path d="m5 17 4.5-4 3.2 2.7 2.4-2 4 3.3" /></>}
      {name === "operations" && <><circle cx="12" cy="12" r="8" /><path d="M12 8v4l2.8 1.8M12 2v2m0 16v2M2 12h2m16 0h2" /></>}
    </svg>
  );
}

export default function ServicesSection() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const update = () => setMobile(window.innerWidth <= 760);
    update(); window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="hizmetler" style={{ width: "100%", background: "#183f33", color: "#f7f8f4", padding: mobile ? "64px 22px 70px" : "88px 56px 94px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1128, margin: "0 auto", display: "grid", gridTemplateColumns: mobile ? "1fr" : "minmax(270px,.8fr) minmax(0,1.2fr)", gap: mobile ? 32 : 86, alignItems: "start" }}>
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9, color: "#bed0bd", fontSize: 9, letterSpacing: "1.35px" }}><span style={{ width: 6, height: 6, borderRadius: "50%", background: "#c9ee79" }} /> HIZMETLERIMIZ</div>
          <h2 style={{ margin: "20px 0 16px", color: "#f7f8f4", fontSize: mobile ? 38 : 48, lineHeight: 1.08, letterSpacing: "-2px", fontWeight: 500 }}>Magazanizin her adiminda<br /><em style={{ color: "#c9ee79", fontFamily: "Georgia,serif", fontWeight: 400 }}>yaninizdayiz.</em></h2>
          <p style={{ maxWidth: 330, margin: 0, color: "#c3d1c4", fontSize: 12, lineHeight: 1.85 }}>Kurulumdan katalog duzenine, urun iceriginden gunluk operasyon destegine kadar ihtiyaciniz olan isleri birlikte tamamlayalim.</p>
          <a href="mailto:merhaba@vitrinaops.com?subject=Hizmetler%20hakkinda" style={{ display: "inline-flex", alignItems: "center", gap: 13, marginTop: 26, paddingBottom: 7, borderBottom: "1px solid #ffffff55", color: "#fff", fontSize: 10, fontWeight: 500 }}>Hizmetleri konusalim <span aria-hidden="true" style={{ color: "#c9ee79", fontSize: 15 }}>&#8594;</span></a>
          {!mobile && <span aria-hidden="true" style={{ display: "block", marginTop: 60, color: "#ffffff12", fontSize: 110, lineHeight: .8, letterSpacing: "-12px", fontWeight: 700 }}>v.</span>}
        </div>

        <div>
          {services.map((service) => (
            <article key={service.type} style={{ display: "grid", gridTemplateColumns: mobile ? "38px minmax(0,1fr)" : "48px minmax(0,1fr) 94px", gap: mobile ? 12 : 18, alignItems: "start", padding: mobile ? "20px 0 21px" : "23px 0 25px", borderTop: "1px solid #ffffff35" }}>
              <span style={{ display: "grid", placeItems: "center", width: 34, height: 34, border: "1px solid #c9ee7955", borderRadius: "50%", color: "#c9ee79" }}><ServiceIcon name={service.icon} /></span>
              <div><h3 style={{ margin: 0, color: "#fff", fontSize: mobile ? 16 : 18, lineHeight: 1.35, letterSpacing: "-.35px", fontWeight: 500 }}>{service.title}</h3><p style={{ margin: "9px 0 0", color: "#c3d1c4", fontSize: 10, lineHeight: 1.8 }}>{service.description}</p></div>
              {!mobile && <span style={{ justifySelf: "end", paddingTop: 4, color: "#9eb7a1", fontSize: 7, letterSpacing: "1px", textAlign: "right" }}>{service.type}</span>}
            </article>
          ))}
          <div style={{ borderTop: "1px solid #ffffff35" }} />
        </div>
      </div>
    </section>
  );
}

