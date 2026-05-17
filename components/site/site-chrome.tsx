"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import type { Profile } from "@/types";

type SiteChromeProps = {
  children: ReactNode;
  profile?: Pick<Profile, "email"> | null;
  socialLinks?: Array<{
    platform: string;
    url: string;
  }>;
};

export function SiteChrome({
  children,
  profile,
  socialLinks = [],
}: SiteChromeProps) {
  const pathname = usePathname();
  const isStandaloneQattahPage = pathname === "/projects/qattah";

  if (isStandaloneQattahPage) {
    return <main>{children}</main>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer profile={profile} socialLinks={socialLinks} />
    </div>
  );
}
