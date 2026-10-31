import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VitrinaOps | E-ticaret urun ve katalog destegi",
  description:
    "Urun gorseli duzenleme, e-ticaret magazasi kurulumu, urun girisi ve katalog yonetimi destegi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}<div aria-hidden="true" style={{ position: "fixed", zIndex: 40, left: 0, right: 0, bottom: 0, height: 170, pointerEvents: "none", background: "rgba(247,247,244,.2)", borderTop: "1px solid rgba(255,255,255,.5)", backdropFilter: "blur(32px) saturate(160%)", WebkitBackdropFilter: "blur(32px) saturate(160%)", maskImage: "linear-gradient(to top, black 0%, transparent 100%)", WebkitMaskImage: "linear-gradient(to top, black 0%, transparent 100%)" }} /></body>
    </html>
  );
}

