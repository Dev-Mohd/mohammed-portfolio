import { prisma } from "@/lib/db";
import { ContactSection } from "@/components/site/contact-section";
import { fallbackProfile } from "@/lib/fallback-data";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const profile = await getProfile();

  return (
    <div className="pt-16">
      <ContactSection profile={profile} />
    </div>
  );
}

async function getProfile() {
  try {
    return (await prisma.profile.findFirst()) ?? fallbackProfile;
  } catch {
    return fallbackProfile;
  }
}
