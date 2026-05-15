"use client";

import { NextIntlClientProvider } from "next-intl";
import { AuthProvider } from "@/components/providers/auth-provider";
import messages from "@/messages/ar.json";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <NextIntlClientProvider messages={messages} locale="ar">
        {children}
      </NextIntlClientProvider>
    </AuthProvider>
  );
}
