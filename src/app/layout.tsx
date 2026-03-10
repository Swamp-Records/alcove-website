import type { Metadata } from "next";
//preloaded font file - not currently being used so i (isa) commented it out
//import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

//metadata for the root layout
export const metadata: Metadata = {
  title: {
    default: "Alcove | Official Band Website",
    template: "%s | Alcove",
  },
  description: "Official website for the band Alcove",
  icons: {
    icon: "/favicon.ico",
  },
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
