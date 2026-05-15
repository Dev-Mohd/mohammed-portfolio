import { prisma } from "@/lib/db";
import { HeroSection } from "@/components/site/hero-section";
import { AboutSection } from "@/components/site/about-section";
import { SkillsSection } from "@/components/site/skills-section";
import { ProjectsSection } from "@/components/site/projects-section";
import { ContactSection } from "@/components/site/contact-section";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const [skills, projects] = await Promise.all([
    prisma.skill.findMany({ orderBy: { order: "asc" } }),
    prisma.project.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    }),
  ]);

  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection skills={skills} />
      <ProjectsSection projects={projects} />
      <ContactSection />
    </>
  );
}
