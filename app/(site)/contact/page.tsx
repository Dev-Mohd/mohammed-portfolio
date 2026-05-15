import { prisma } from "@/lib/db";
import { ContactSection } from "@/components/site/contact-section";

export const dynamic = "force-dynamic";

export default async function ContactPage() {
  const profile = await prisma.profile.findFirst();

  return (
    <div className="pt-16">
      <ContactSection profile={profile} />
    </div>
  );
}
