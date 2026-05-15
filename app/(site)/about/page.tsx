import { prisma } from "@/lib/db";
import { AboutSection } from "@/components/site/about-section";
import { SkillsSection } from "@/components/site/skills-section";
import { ExperienceSection } from "@/components/site/experience-section";

export default async function AboutPage() {
  const [skills, experiences] = await Promise.all([
    prisma.skill.findMany({ orderBy: { order: "asc" } }),
    prisma.experience.findMany({ orderBy: { order: "asc" } }),
  ]);

  return (
    <div className="pt-16">
      <AboutSection />
      <SkillsSection skills={skills} />
      <ExperienceSection experiences={experiences} />
    </div>
  );
}
