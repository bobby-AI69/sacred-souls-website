import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sacred-souls.com.au"),
  title: {
    default: "Sacred Soul — she was there. and then she wasn't.",
    template: "%s · Sacred Soul",
  },
  description:
    "Sacred Soul — a surrealist gothic dark romance. Cinematic prints, episodes, and haunted fragments.",
  openGraph: {
    title: "Sacred Soul",
    description: "she was there. and then she wasn't.",
    url: "https://sacred-souls.com.au",
    siteName: "Sacred Soul",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sacred Soul",
    description: "she was there. and then she wasn't.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-obsidian text-white antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
