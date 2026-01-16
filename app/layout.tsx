import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "./Components/Home/Navbar/ResponsiveNav";
import Footer from "./Components/Home/Footer/Footer";
import ScrollToTop from "./Components/Helper/ScrollToTop";

const font= Inter({
  weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Michael Portfolio | Next.js 15",
  description: "Portfolio built with Next.js 15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-[#0d0d1f]`}
      >
        <ResponsiveNav />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
