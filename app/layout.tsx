import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VitrinaOps | E-Ticaret Danışmanlığı, Görsel Stüdyo & Ürün Yönetimi",
  description:
    "E-ticaret mağazanızın tüm angarya operasyonunu bize bırakın. Birebir danışmanlık, profesyonel ürün görseli düzenleme ve altyapı bağımsız ürün yükleme & katalog yönetimi.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
