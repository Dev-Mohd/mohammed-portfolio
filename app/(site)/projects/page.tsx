import { prisma } from "@/lib/db";
import { ProjectsGrid } from "@/components/site/projects-grid";
import { fallbackProjects } from "@/lib/fallback-data";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <div className="pt-16">
      <ProjectsGrid projects={projects} />
    </div>
  );
}

async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      where: { published: true },
      orderBy: { order: "asc" },
    });

    return projects.length ? projects : fallbackProjects;
  } catch {
    return fallbackProjects;
  }
}
