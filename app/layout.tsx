import type { Metadata } from "next";
import { Work_Sans, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const workSans = Work_Sans({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NACS Adoption Watch",
  description:
    "Web App that shows brands that adopted the North American Charging Standard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={`${inter.className} bg-neutral-100 text-gray-950 font-sans`}>
        <Header />

        {children}

        <Footer />  
      </body>
    </html>
  );
}