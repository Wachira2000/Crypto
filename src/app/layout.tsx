import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThirdwebProvider } from "thirdweb/react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";



const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Lend",
  description: "Best lending platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <ThirdwebProvider>
          <Analytics/>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer/>
        </ThirdwebProvider>
      </body>
    </html>
  );
}