import { prisma } from "@/lib/db";
import { SiteChrome } from "@/components/site/site-chrome";

async function getSiteChromeData() {
  try {
    const [profile, socialLinks] = await Promise.all([
      prisma.profile.findFirst({ select: { email: true } }),
      prisma.socialLink.findMany({
        orderBy: { order: "asc" },
        select: {
          platform: true,
          url: true,
        },
      }),
    ]);

    return { profile, socialLinks };
  } catch {
    return { profile: null, socialLinks: [] };
  }
}

export default async function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { profile, socialLinks } = await getSiteChromeData();

  return (
    <SiteChrome profile={profile} socialLinks={socialLinks}>
      {children}
    </SiteChrome>
  );
}
