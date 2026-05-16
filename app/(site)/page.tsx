import { prisma } from "@/lib/db";
import { HeroSection } from "@/components/site/hero-section";
import { AboutSection } from "@/components/site/about-section";
import { SkillsSection } from "@/components/site/skills-section";
import { ProjectsSection } from "@/components/site/projects-section";
import { ContactSection } from "@/components/site/contact-section";
import {
  fallbackProfile,
  fallbackProjects,
  fallbackSkills,
} from "@/lib/fallback-data";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const { skills, projects, profile } = await getHomeData();

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ContactSection profile={profile} />
    </>
  );
}

async function getHomeData() {
  try {
    const [skills, projects, profile] = await Promise.all([
      prisma.skill.findMany({ orderBy: { order: "asc" } }),
      prisma.project.findMany({
        where: { published: true },
        orderBy: { order: "asc" },
      }),
      prisma.profile.findFirst(),
    ]);

    return {
      skills: skills.length ? skills : fallbackSkills,
      projects: projects.length ? projects : fallbackProjects,
      profile: profile ?? fallbackProfile,
    };
  } catch {
    return {
      skills: fallbackSkills,
      projects: fallbackProjects,
      profile: fallbackProfile,
    };
  }
}
