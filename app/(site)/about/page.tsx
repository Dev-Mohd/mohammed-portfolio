import { prisma } from "@/lib/db";
import { AboutSection } from "@/components/site/about-section";
import { SkillsSection } from "@/components/site/skills-section";
import { ExperienceSection } from "@/components/site/experience-section";
import { fallbackExperiences, fallbackSkills } from "@/lib/fallback-data";

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const { skills, experiences } = await getAboutData();

  return (
    <div className="pt-16">
      <AboutSection />
      <SkillsSection skills={skills} />
      <ExperienceSection experiences={experiences} />
    </div>
  );
}

async function getAboutData() {
  try {
    const [skills, experiences] = await Promise.all([
      prisma.skill.findMany({ orderBy: { order: "asc" } }),
      prisma.experience.findMany({ orderBy: { order: "asc" } }),
    ]);

    return {
      skills: skills.length ? skills : fallbackSkills,
      experiences: experiences.length ? experiences : fallbackExperiences,
    };
  } catch {
    return {
      skills: fallbackSkills,
      experiences: fallbackExperiences,
    };
  }
}
