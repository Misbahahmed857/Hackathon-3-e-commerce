import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { satoshi } from "@/styles/fonts";
import TopBanner from "@/components/layout/TopNavbar/page";
import TopNavbar from "@/components/layout/Navbar/MainNavbar/page";
import Footer from "@/components/layout/Footer/page";
import HolyLoader from "holy-loader";
import Providers from "./ProductProvider";

export const metadata: Metadata = {
  title: "SHOP.CO",
  description: "SHOP.CO - E-commerce Shopping Web",
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body className={satoshi.className}>
        <HolyLoader color="#868686" />
        <TopBanner />
        <Providers>
          <TopNavbar />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  );
}