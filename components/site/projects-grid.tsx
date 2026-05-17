"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Project } from "@/types";
import { ArrowUpRight } from "lucide-react";

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            المشاريع
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            أعمالي المختارة
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl divide-y divide-border border-y border-border">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
              className="py-6"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h2 className="text-2xl font-bold tracking-tight">
                    {project.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  صفحة التطبيق
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
