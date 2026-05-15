import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppProviders } from "@/components/providers/app-providers";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "محمد الشهري | مطور تطبيقات",
  description: "خريج هندسة برمجيات - متخصص في Flutter وتطوير تطبيقات الجوال",
  keywords: ["Flutter", "Mobile Developer", "Software Engineer", "محمد الشهري"],
  authors: [{ name: "محمد الشهري" }],
  openGraph: {
    title: "محمد الشهري | مطور تطبيقات",
    description: "خريج هندسة برمجيات - متخصص في Flutter",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
