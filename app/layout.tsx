import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Playfair_Display } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair"
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["400"],
  variable: "--font-cormorant"
});

export const metadata: Metadata = {
<<<<<<< codex/create-personal-brand-website-for-musician-th5cp1
  title: "D’Bediance | Sound With Purpose",
  description: "Official website of D’Bediance, a disciplined and purpose-driven musical identity."
=======
  title: "Sound With Purpose",
  description: "A disciplined and purpose-driven musical identity."
>>>>>>> main
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${cormorant.variable}`}>
        <header className="site-nav">
          <Link href="/" className="brand-mark">
<<<<<<< codex/create-personal-brand-website-for-musician-th5cp1
            D’Bediance
=======
            Sound With Purpose
>>>>>>> main
          </Link>
          <nav>
            <Link href="/about">About</Link>
            <Link href="/music">Music</Link>
            <Link href="/mission">Mission</Link>
            <Link href="/press">Press</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </header>
        {children}
        <footer className="site-footer">
          <span>Cameroon</span>
          <span className="divider" aria-hidden="true" />
          <span>Intentional Artistry</span>
        </footer>
      </body>
    </html>
  );
}
