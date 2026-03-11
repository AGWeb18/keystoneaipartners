import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Keystone AI Partners",
    template: "%s | Keystone AI Partners",
  },
  description:
    "Keystone AI Partners helps mid-market teams modernize data, launch automation, and deploy AI copilots that move real business metrics.",
  keywords: [
    "AI consulting",
    "data engineering",
    "automation",
    "Power Platform",
    "Snowflake",
    "Databricks",
    "LLM",
    "Keystone AI Partners",
  ],
  authors: [{ name: "Keystone AI Partners" }],
  creator: "Keystone AI Partners",
  publisher: "Keystone AI Partners",
  metadataBase: new URL("https://keystoneaipartners.com"),
  openGraph: {
    title: "Keystone AI Partners",
    description:
      "Boutique AI and automation consultancy delivering governed data platforms, intelligent workflows, and measurable impact.",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: "/assets/img/big-data-7216774.svg",
        alt: "Keystone AI Partners data and automation illustration",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keystone AI Partners",
    description:
      "We build AI-ready data foundations, automation copilots, and analytics dashboards for mid-market leaders.",
    images: ["/assets/img/big-data-7216774.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
