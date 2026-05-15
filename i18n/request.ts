import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
  if (!routing.locales.includes(locale as "ar" | "en")) {
    notFound();
  }

  const messages = (await import(`../messages/${locale}.json`)).default;

  return {
    messages,
    timeZone: "Asia/Riyadh",
    now: new Date(),
  };
});
