import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { ProjectDetail } from "@/components/site/project-detail";
import { fallbackProjects } from "@/lib/fallback-data";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-16">
      <ProjectDetail project={project} />
    </div>
  );
}

async function getProject(slug: string) {
  try {
    const project = await prisma.project.findUnique({
      where: { slug },
    });

    return project ?? fallbackProjects.find((item) => item.slug === slug);
  } catch {
    return fallbackProjects.find((item) => item.slug === slug);
  }
}
