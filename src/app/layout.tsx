import type { Metadata } from "next";
//preloaded font file - not currently being used so i (isa) commented it out
//import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

export const metadata: Metadata = {
  //changed meta info so the title + description are correct
  title: "Alcove Band",
  description: "Official website for the band Alcove",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>

        {/*added the navbar component so it would show up on every page, not just the home page */}
        <Navbar></Navbar>
        
        {children}
        <Footer />
      </body>
    </html>
  );
}
