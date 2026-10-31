"use client";

import { useEffect, useState } from "react";

const steps = [
  { title: "Magaza durumunuzu paylasin", tag: "SIZDEN", text: "Mevcut bir e-ticaret magazaniz var mi, yoksa yeni mi kuracaksiniz? Magazaniz varsa hangi platformda oldugunu belirtin.", detail: "Mevcut magaza veya yeni baslangic" },
  { title: "Urun kapsam?n? belirleyin", tag: "SIZDEN", text: "Eklenecek ya da duzenlenecek urun adedini ve elinizdeki urun listesini paylasin. Listeyi birlikte gozden gecirelim.", detail: "Urun adedi ve ham liste" },
  { title: "Gorsel yonunuzu secin", tag: "SIZDEN", text: "Calismak istediginiz gorsel temasini anlatin. Varsa begendiginiz bir referans gorsel ve ham urun fotograflarinizi gonderin.", detail: "Tema, referans ve fotograflar" },
  { title: "Urunlerinizi yayina hazirlayalim", tag: "BIZDEN", text: "Gorselleri iyilestirelim, SEO odakli urun baslik ve bilgilerini hazirlayalim, urunleri magazaniza ekleyip son kontrolleri yapalim.", detail: "Gorsel, icerik ve urun girisi" },
];

export default function ProcessSection() {
  const [columns, setColumns] = useState(4);
  useEffect(() => {
    const update = () => setColumns(window.innerWidth <= 560 ? 1 : window.innerWidth <= 900 ? 2 : 4);
    update(); window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <section id="nasil-calisir" style={{ maxWidth: 1240, margin: "0 auto", padding: columns === 1 ? "64px 22px 68px" : columns === 2 ? "74px 30px 78px" : "92px 56px 96px", color: "#17211d" }}>
      <div style={{ display: "flex", flexDirection: columns < 4 ? "column" : "row", alignItems: columns < 4 ? "flex-start" : "flex-end", justifyContent: "space-between", gap: 24, marginBottom: 34 }}>
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> BASIT VE SEFFAF CALISMA SURECI</div>
          <h2 style={{ margin: "18px 0 0", fontSize: columns === 1 ? 35 : 42, lineHeight: 1.1, letterSpacing: "-1.8px", fontWeight: 600 }}>Siz ihtiyacinizi anlatin.<br /><em style={{ fontFamily: "Georgia,serif", color: "#64876b", fontWeight: 400 }}>Gerisini birlikte tamamlayalim.</em></h2>
        </div>
        <p style={{ maxWidth: 350, margin: 0, color: "#747d76", fontSize: 12, lineHeight: 1.8 }}>Ilk gorusmeden urunler magazaniza eklenene kadar, sureci adim adim ve kapsam netligiyle ilerletiyoruz.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: 12, alignItems: "stretch" }}>
        {steps.map((step, index) => (
          <article key={step.title} style={{ display: "flex", flexDirection: "column", minHeight: columns === 1 ? 0 : 250, padding: columns === 1 ? "21px 20px" : "23px 20px 20px", border: "1px solid #e5e8e1", borderRadius: 5, background: "#fff", boxShadow: "0 8px 24px rgba(23,33,29,.045)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
              <span style={{ color: "#5f8063", fontSize: 10, fontWeight: 500, letterSpacing: "1.2px" }}>{String(index + 1).padStart(2, "0")}</span>
              <span style={{ padding: "5px 7px", borderRadius: 2, background: step.tag === "BIZDEN" ? "#e8f0e4" : "#f1f2ee", color: step.tag === "BIZDEN" ? "#315b3c" : "#788278", fontSize: 7, letterSpacing: ".8px" }}>{step.tag}</span>
            </div>
            <h3 style={{ margin: "27px 0 9px", color: "#233129", fontSize: 16, lineHeight: 1.35, letterSpacing: "-.35px", fontWeight: 600 }}>{step.title}</h3>
            <p style={{ margin: 0, color: "#747d76", fontSize: 10, lineHeight: 1.75 }}>{step.text}</p>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: "auto", paddingTop: 19, color: "#617265", fontSize: 8, letterSpacing: ".25px" }}><span aria-hidden="true" style={{ width: 5, height: 5, borderRadius: "50%", background: "#91ad7b" }} />{step.detail}</div>
          </article>
        ))}
      </div>

      <div style={{ display: "flex", flexDirection: columns === 1 ? "column" : "row", alignItems: columns === 1 ? "flex-start" : "center", justifyContent: "space-between", gap: 18, marginTop: 18, padding: columns === 1 ? "21px" : "20px 24px", borderRadius: 4, background: "#183f33", color: "#f7f8f4" }}>
        <div><span style={{ display: "block", marginBottom: 6, color: "#bdd0bd", fontSize: 8, letterSpacing: "1.1px" }}>BIRLIKTE NETLESTIRELIM</span><span style={{ fontSize: 11, lineHeight: 1.6 }}>Liste, platform ve gorsel yonunuz belli oldugunda kapsam ile teslim takvimini netlestirelim.</span></div>
        <a href="mailto:merhaba@vitrinaops.com?subject=E-ticaret%20urun%20destegi" style={{ flex: "0 0 auto", display: "inline-flex", alignItems: "center", gap: 17, padding: "12px 14px", borderRadius: 3, background: "#f5f7f0", color: "#1b3e32", fontSize: 10, fontWeight: 600 }}>Projenizi anlatin <span aria-hidden="true" style={{ color: "#64876b", fontSize: 15 }}>&#8594;</span></a>
      </div>
    </section>
  );
}
