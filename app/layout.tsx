import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
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

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = locale === "ar";

  return (
    <html lang={locale} dir={isRTL ? "rtl" : "ltr"} className="dark">
      <body className={`${inter.variable} font-sans antialiased`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
