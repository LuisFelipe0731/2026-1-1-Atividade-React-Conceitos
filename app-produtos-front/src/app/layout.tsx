import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projeto de Produtos",
  description: "Pesquisa de produtos DummyJSON",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={'${geistSans.variable} ${geistMono.variable} antialiased'}>
      <body className="bg-gray-50 text-black">
        {/* O Header foi removido daqui para ficar dentro da page.tsx */}
        {children}
      </body>
    </html>
  );
}