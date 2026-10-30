import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VitrinaOps | E-commerce product and catalog support",
  description:
    "We turn your product list into polished images and a store-ready catalog. Product uploads and e-commerce operations support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
