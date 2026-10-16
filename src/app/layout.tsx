import type { Metadata } from "next";
import {
  Commissioner,
  JetBrains_Mono,
  Neucha,
  Oswald,
} from "next/font/google";
import "./globals.css";

const display = Oswald({
  weight: ["500", "600", "700"],
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-display",
});

const script = Neucha({
  weight: "400",
  subsets: ["latin", "cyrillic"],
  variable: "--font-script",
});

const body = Commissioner({
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  weight: ["400", "500"],
  subsets: ["latin", "cyrillic", "cyrillic-ext"],
  variable: "--font-mono",
});

const siteTitle = "Кварта — свежая обжарка кофе в Минске";
const siteDescription =
  "Маленькая обжарка на Короля, 9. Партии по 5 кг, зерно к вам на 1–3 день после обжарки. Подписка и разовый заказ.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "ru_BY",
    siteName: "Кварта",
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${display.variable} ${script.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">{children}</body>
    </html>
  );
}
