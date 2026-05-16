import { prisma } from "@/lib/db";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer profile={profile} socialLinks={socialLinks} />
    </div>
  );
}
