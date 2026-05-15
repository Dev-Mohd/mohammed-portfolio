import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { ProjectDetail } from "@/components/site/project-detail";

export const dynamic = "force-dynamic";
export const dynamicParams = true;

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;

  const project = await prisma.project.findUnique({
    where: { slug },
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
