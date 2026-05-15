import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { ProjectDetail } from "@/components/site/project-detail";

interface ProjectPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const projects = await prisma.project.findMany({
    select: { slug: true },
  });

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await prisma.project.findUnique({
    where: { slug: params.slug },
  });

  if (!project) {
    notFound();
  }

  return (
    <div className="pt-16">
      <ProjectDetail project={project} />
    </div>
  );
}
