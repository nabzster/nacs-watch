import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const workSans = Work_Sans({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={`font-work-sans ${workSans.className} bg-neutral-100 text-gray-950`}>
        <Header />

        {children}
      </body>
    </html>
  );
}