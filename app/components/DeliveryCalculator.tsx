"use client";

import { useEffect, useState } from "react";

const DAILY_CAPACITY = 25;

export default function DeliveryCalculator() {
  const [products, setProducts] = useState(150);
  const [mobile, setMobile] = useState(false);
  const [sliderFocused, setSliderFocused] = useState(false);
  const deliveryDays = Math.ceil(products / DAILY_CAPACITY);

  useEffect(() => {
    const update = () => setMobile(window.innerWidth <= 700);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const sectionStyle: React.CSSProperties = { maxWidth: 1240, margin: "0 auto", padding: mobile ? "64px 22px 70px" : "84px 56px 88px", color: "#17211d" };
  const panelStyle: React.CSSProperties = { display: "grid", gridTemplateColumns: mobile ? "1fr" : "1.1fr .9fr", overflow: "hidden", border: "1px solid #e5e8e1", borderRadius: 6, background: "#f0f2ec", boxShadow: "0 16px 42px rgba(23,33,29,.07)" };

  return (
    <section className="delivery-calculator" id="sure-hesapla" style={sectionStyle}>
      <div style={{ display: "flex", alignItems: mobile ? "flex-start" : "flex-end", flexDirection: mobile ? "column" : "row", justifyContent: "space-between", gap: 20, marginBottom: 30 }}>
        <div>
          <div className="eyebrow"><span className="eyebrow-dot" /> HIZLI TESLIMAT TAHMINI</div>
          <h2 style={{ margin: "17px 0 0", fontSize: mobile ? 35 : 42, lineHeight: 1.1, letterSpacing: "-1.8px", fontWeight: 600 }}>Urun adedinizi secin.<br /><em style={{ fontFamily: "Georgia,serif", color: "#64876b", fontWeight: 400 }}>Sureyi birlikte hesaplayalim.</em></h2>
        </div>
        <p style={{ maxWidth: 330, margin: 0, color: "#747d76", fontSize: 12, lineHeight: 1.8 }}>Urun sayinizi secin, tahmini teslim suresini gorun.</p>
      </div>

      <div style={panelStyle}>
        <div style={{ padding: mobile ? "25px 21px 28px" : "34px 38px 31px" }}>
          <span style={{ color: "#7c887d", fontSize: 9, fontWeight: 600, letterSpacing: "1.2px" }}>URUN LISTENIZ</span>
          <div style={{ display: "flex", alignItems: "baseline", gap: 9, marginTop: 13 }}>
            <strong style={{ color: "#1d2a22", fontSize: mobile ? 48 : 58, lineHeight: 1, letterSpacing: "-3px", fontVariantNumeric: "tabular-nums" }}>{products}</strong>
            <span style={{ color: "#748075", fontSize: 13 }}>urun</span>
          </div>
                    <div className="delivery-range-control" style={{ position: "relative", height: 30, margin: "22px 0 8px", display: "flex", alignItems: "center" }}>
            <span aria-hidden="true" style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 4, borderRadius: 999, background: "#d9d9d9", transform: "translateY(-50%)" }} />
            <span aria-hidden="true" style={{ position: "absolute", left: 0, top: "50%", width: `${((products - 25) / 475) * 100}%`, height: 4, borderRadius: 999, background: "#111", transform: "translateY(-50%)" }} />
            <span className="delivery-range-thumb" aria-hidden="true" style={{ position: "absolute", left: `${((products - 25) / 475) * 100}%`, top: "50%", width: 18, height: 18, border: "3px solid #111", borderRadius: "50%", background: "#fff", boxShadow: sliderFocused ? "0 0 0 4px #1112" : "0 2px 7px #183f3328", transform: "translate(-50%,-50%)", pointerEvents: "none", transition: "box-shadow .18s ease" }} />
            <input className="range range-sm range-neutral delivery-range" type="range" min="25" max="500" step="25" value={products} aria-label="Urun sayisi" onChange={(event) => setProducts(Number(event.target.value))} onFocus={() => setSliderFocused(true)} onBlur={() => setSliderFocused(false)} style={{ position: "absolute", inset: 0, zIndex: 2, width: "100%", height: "100%", margin: 0, opacity: 0, cursor: "pointer" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", color: "#879087", fontSize: 9 }}><span>25 urun</span><span>500 urun</span></div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", minHeight: mobile ? 205 : 250, padding: mobile ? "25px 22px" : "34px 38px", background: "#183f33", color: "#f7f8f4" }}>
          <span style={{ color: "#c0d0c1", fontSize: 9, letterSpacing: "1.25px" }}>TAHMINI TESLIM SURESI</span>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginTop: 15 }}><strong style={{ color: "#fff", fontSize: mobile ? 66 : 78, lineHeight: .95, letterSpacing: "-5px", fontVariantNumeric: "tabular-nums" }}>{deliveryDays}</strong><span style={{ color: "#d4e0d3", fontSize: 16 }}>gun</span></div>
        </div>
      </div>
      <p aria-live="polite" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0,0,0,0)", whiteSpace: "nowrap" }}>{products} urun icin tahmini teslim suresi {deliveryDays} gun.</p>
    </section>
  );
}








