import { prisma } from "@/lib/db";
import { ProjectsGrid } from "@/components/site/projects-grid";

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const projects = await prisma.project.findMany({
    where: { published: true },
    orderBy: { order: "asc" },
  });

  return (
    <div className="pt-16">
      <ProjectsGrid projects={projects} />
    </div>
  );
}
