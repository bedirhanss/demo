"use client";

import { useState } from "react";

const questions = [
  { question: "Calismaya baslamak icin sizden ne gerekiyor?", answer: "Urunlerinizi gosteren bir liste ve elinizdeki ham urun fotograflari yeterli. Listeyi Excel, CSV veya benzer bir formatta paylasabilirsiniz. Mevcut magazaniz varsa, urun girisi icin gerekli erisimleri birlikte belirleriz." },
  { question: "Henuz bir e-ticaret magazam yok. Yine de destek alabilir miyim?", answer: "Evet. Urun listenizi duzenleyip gorsellerinizi hazirlayabilir, katalogunuzu sececeginiz e-ticaret platformuna aktarima hazir hale getirebiliriz." },
  { question: "Hangi platformlarla calisiyorsunuz?", answer: "Shopify, WooCommerce, Wix, PrestaShop, BigCommerce, ikas ve Etsy dahil farkli e-ticaret platformlarina urun katalogu hazirligi ve urun girisi destegi sunuyoruz." },
  { question: "Ham urun fotograflarini duzenliyor musunuz?", answer: "Evet. Elinizdeki urun fotograflarini paylasabilirsiniz. Gorsel duzenleme ihtiyacini ve magazanizda kullanilacak formati ise ise baslamadan once birlikte netlestiririz." },
  { question: "Fiyat nasil belirleniyor?", answer: "Fiyat; urun adedi, urun bilgilerinin hazirlik durumu, gorsel duzenleme ihtiyaci ve talep edilen hizmetlere gore belirlenir. Kapsami konustuktan sonra size ozel teklif sunariz." },
  { question: "Teslim suresi neye gore hesaplanir?", answer: "Urun adedinizi teslimat hesaplayicisinda secerek tahmini sureyi gorebilirsiniz. Kesin takvim, listenin kapsam ve hazirlik durumuna gore birlikte netlestirilir." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="sss" style={{ maxWidth: 1240, margin: "0 auto", padding: "88px 56px 94px", display: "grid", gridTemplateColumns: "minmax(250px,.8fr) minmax(0,1.2fr)", gap: 70, color: "#17211d" }} className="faq-section">
      <div>
        <div className="eyebrow"><span className="eyebrow-dot" /> MERAK EDILENLER</div>
        <h2 style={{ margin: "18px 0 15px", fontSize: 42, lineHeight: 1.1, letterSpacing: "-1.8px", fontWeight: 600 }}>Aklinizda soru<br /><em style={{ fontFamily: "Georgia,serif", color: "#64876b", fontWeight: 400 }}>mu var?</em></h2>
        <p style={{ maxWidth: 310, margin: 0, color: "#747d76", fontSize: 12, lineHeight: 1.8 }}>Calisma sureci, urun fotograflari veya paketler hakkinda merak ettikleriniz.</p>
        <a href="mailto:merhaba@vitrinaops.com" style={{ display: "inline-flex", alignItems: "center", gap: 9, marginTop: 22, color: "#294b38", fontSize: 11, fontWeight: 600 }}>Baska bir sorunuz mu var? <span aria-hidden="true">&#8594;</span></a>
      </div>
      <div style={{ borderTop: "1px solid #dfe5dc" }}>
        {questions.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} style={{ borderBottom: "1px solid #dfe5dc" }}>
              <button type="button" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? null : index)} style={{ display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between", gap: 20, padding: "18px 0", border: 0, background: "transparent", color: "#233129", textAlign: "left", font: "inherit", fontSize: 12, fontWeight: 600, cursor: "pointer" }}>
                <span style={{ display: "flex", alignItems: "baseline", gap: 14 }}><span style={{ color: "#91a08e", fontSize: 9, letterSpacing: ".6px", fontWeight: 400 }}>{String(index + 1).padStart(2, "0")}</span>{item.question}</span>
                <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" style={{ flex: "0 0 16px", color: "#608263" }}><path d="M3 8h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />{!isOpen && <path d="M8 3v10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />}</svg>
              </button>
              <div className="faq-answer" aria-hidden={!isOpen} style={{ display: "grid", gridTemplateRows: isOpen ? "1fr" : "0fr", opacity: isOpen ? 1 : 0, transition: "grid-template-rows .36s cubic-bezier(.2,.75,.25,1), opacity .25s ease" }}><div style={{ minHeight: 0, overflow: "hidden" }}><div style={{ padding: "0 34px 18px", color: "#727c73", fontSize: 11, lineHeight: 1.8 }}>{item.answer}</div></div></div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        @media(max-width:700px){section{display:block!important;padding:64px 22px 70px!important}section>div:first-child{margin-bottom:28px}section h2{font-size:36px!important}}
        @media(prefers-reduced-motion:reduce){.faq-answer{transition:none!important}}
      `}</style>
    </section>
  );
}


