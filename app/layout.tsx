import type { Metadata } from "next";
import "./globals.scss";
import { Geist, Geist_Mono } from "next/font/google"
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Latihan Trading",
  description: "Lacak, analisis, dan optimalkan performa trading Anda dengan Latihan Trading.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
  <html lang="id" suppressHydrationWarning>
    <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white selection:bg-blue-500/30 min-h-screen flex flex-col`}
    >
      <Header />
      <main className="flex-1 flex flex-col">
        {children}
      </main>
      <Footer />
    </body>
  </html>
  );
}