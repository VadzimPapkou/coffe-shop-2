import type { Metadata } from "next";
import {
  Archivo,
  Bebas_Neue,
  DM_Mono,
  Permanent_Marker,
} from "next/font/google";
import "./globals.css";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

const script = Permanent_Marker({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
});

const body = Archivo({
  subsets: ["latin"],
  variable: "--font-body",
});

const mono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Buy Organic Coffee Beans Online | Apocalypse Coffee Roasters",
  description:
    "Certified Organic Small-batch Roasted in Melbourne, FL. It's the end… of bad coffee.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${script.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">{children}</body>
    </html>
  );
}
