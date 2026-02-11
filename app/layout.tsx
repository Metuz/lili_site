import React from "react"
import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#4ECDC4",
};

export const metadata: Metadata = {
  title: {
    default: "Terapia el Fin | Terapia Psicologica Profesional",
    template: "%s | Terapia el Fin",
  },
  description:
    "Servicios profesionales de psicología para ayudarle a lograr el bienestar mental.",
  keywords: [
    "terapia psicologica",
    "Lilia Aguilar",
    "Terapia el Fin",
    "Terapia de pareja",
    "Terapia infantil",
    "Terapia para adultos",
    "psicologia",
    "salud mental",
    "bienestar emocional",
    "consulta psicologica online",
    "psicoterapia psicoanalitica",
  ],
  authors: [{ name: "Lilia Aguilar", url: "https://www.terapiaelfin.com/" }],
  creator: "Terapia el fin",
  publisher: "Terapia el fin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Terapia el fin - Terapia Psicologica Profesional",
    title: "Terapia el fin | Terapia Psicologica Profesional",
    description:
      "Servicios profesionales de psicología para ayudarle a lograr el bienestar mental.",
    images: [
      {
        url: "/logo2.svg",
        width: 800,
        height: 600,
        alt: "Terapia el fin - Terapia Psicologica Profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Terapia el fin - Terapia Psicologica Profesional",
    description:
      "Servicios profesionales de psicología para ayudarle a lograr el bienestar mental.",
    images: ["/logo2.svg"],
  },
  alternates: {
    canonical: "/",
  },
  category: "health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/logo.jpeg" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="min-h-screen bg-[#f9f9f9] text-[#333]">
          {children}
        </div>
      </body>
    </html>
  );
}
