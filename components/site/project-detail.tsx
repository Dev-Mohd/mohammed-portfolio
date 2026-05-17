"use client";

import { motion } from "framer-motion";
import { Project } from "@/types";
import { Link } from "@/i18n/routing";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

interface ProjectDetailProps {
  project: Project;
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  const appPageUrl =
    project.liveUrl || project.githubUrl || null;

  return (
    <article className="py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            العودة للمشاريع
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="border-y border-border py-10"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {project.description}
          </p>

          {appPageUrl && (
            <Link
              href={appPageUrl}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
            >
              صفحة التطبيق
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </motion.div>
      </div>
    </article>
  );
}
