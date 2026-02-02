import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Social Media Performance Report | Ramify",
  description: "Présentation stratégique Social Media Performance - YouTube, Instagram, LinkedIn",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
