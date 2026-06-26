import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Fraunces, Space_Mono } from "next/font/google";
import "./globals.css";
import { SUMMIT } from "@/lib/content";

const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "500", "600", "700"],
});

const mono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const title = `${SUMMIT.shortName} — ${SUMMIT.organizer} ${SUMMIT.name}`;
const description = `${SUMMIT.theme}: ${SUMMIT.tagline}. ${SUMMIT.location}, ${SUMMIT.year}.`;

export const metadata: Metadata = {
  title: {
    default: title,
    template: `%s — ${SUMMIT.shortName}`,
  },
  description,
  keywords: [
    "IEEE",
    "humanitarian technology",
    "East African Community",
    "AI for Good",
    "ClimateTech",
    "disaster resilience",
    "Kigali",
    "summit 2027",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${display.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}
