"use client";

import { useEffect, useState } from "react";

const INITIAL_SECONDS = 2 * 24 * 60 * 60 + 14 * 60 * 60 + 36 * 60 + 42;

function getRemaining(total: number) {
  const days = Math.floor(total / 86400);
  const hours = Math.floor((total % 86400) / 3600);
  const minutes = Math.floor((total % 3600) / 60);
  const seconds = total % 60;
  return { days, hours, minutes, seconds };
}

export default function TopHeader() {
  const [remaining, setRemaining] = useState(INITIAL_SECONDS);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateViewport = () => setIsMobile(window.innerWidth <= 700);
    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining((current) => (current > 0 ? current - 1 : INITIAL_SECONDS));
    }, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const time = getRemaining(remaining);
  const units = [
    { value: time.days, label: "gun" },
    { value: time.hours, label: "saat" },
    { value: time.minutes, label: "dk" },
    { value: time.seconds, label: "sn" },
  ];

  return (
    <div className="top-header">
      <div className="top-header-inner" style={{ maxWidth: "none", width: "100%", padding: isMobile ? "0 34px" : "0 max(calc((100vw - 1240px) / 2 + 32px), 32px)", justifyContent: isMobile ? "flex-start" : "space-between", minHeight: isMobile ? 32 : 34 }}>
        <p className="top-header-promo" style={isMobile ? { display: "block", width: "100%", margin: 0, textAlign: "left", fontSize: 11, lineHeight: 1, whiteSpace: "nowrap" } : undefined}>E-ticaret operasyon destegi</p>
        <div className="top-header-countdown" aria-label="Geri sayim" style={isMobile ? { display: "none" } : undefined}>
          <span>Fırsata Son !</span>
          <span className="top-countdown">
            {units.map(({ value, label }) => (
              <span className="top-countdown-unit" key={label}>
                <span className="countdown"><span style={{ "--value": value } as React.CSSProperties} aria-live="off" aria-label={String(value)} /></span>
                <small>{label}</small>
              </span>
            ))}
          </span>
        </div>
        <div className="top-header-contact" style={isMobile ? { display: "none" } : undefined}>
          <a href="mailto:merhaba@vitrinaops.com">merhaba@vitrinaops.com</a>
          <span className="top-header-separator" aria-hidden="true" />
          <a href="tel:+905555555555">+90 555 555 55 55</a>
        </div>
      </div>
    </div>
  );
}


