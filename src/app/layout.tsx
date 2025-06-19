import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chapel Futbol",
  description: "Sitio web del Centro Formativo de Alto Rendimiento Chapel Futbol",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/chapelLogo-removebg-preview.png" type="image/x-icon" />
      </head>
      <body className={montserrat.className + " bg-bg text-text min-h-screen"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
