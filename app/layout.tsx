import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./components/navbar";
import { EudoxusSans } from "./utils/fonts"
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "Squads",
  description: "Squads Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${EudoxusSans.className} antialiased bg-[#141B23] flex flex-col text-[#FFFFFF]`}
      >
        <NavBar />
        <div className="flex-1">
        {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
