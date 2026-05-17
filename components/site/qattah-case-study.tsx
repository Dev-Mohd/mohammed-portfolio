"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import {
  ArrowLeft,
  ArrowUpRight,
  Braces,
  Database,
  ExternalLink,
  FileText,
  Github,
  Server,
  Smartphone,
} from "lucide-react";

const githubUrl = "https://github.com/Dev-Mohd/qattah-app";
const replitUrl = "https://replit.com/@devmohd/Qatta-Meal-Plan";
const rawAssetBase =
  "https://raw.githubusercontent.com/Dev-Mohd/qattah-app/main/attached_assets";

const screenshots = [
  {
    src: `${rawAssetBase}/Qattah1_1779006339253.jpg`,
    alt: "واجهة مشروع قطّه",
  },
  {
    src: `${rawAssetBase}/Qattah2_1779006339253.jpg`,
    alt: "قائمة في تطبيق قطّه",
  },
  {
    src: `${rawAssetBase}/Qattah3_1779006339253.jpg`,
    alt: "تفاصيل حسابات قطّه",
  },
];

const highlights = [
  {
    title: "تطبيق لإدارة مصاريف القطة",
    body: "يعرض تجربة لإدارة المصاريف المشتركة، الأعضاء، الحسابات، والسداد بطريقة أوضح للمجموعات اليومية.",
    icon: Smartphone,
  },
  {
    title: "مستودع GitHub حقيقي",
    body: "صفحة المشروع الآن مرتبطة مباشرة بمستودع Qattah-app بدل عرض صفحة منفصلة لا تمثل المشروع الحالي.",
    icon: Github,
  },
  {
    title: "واجهة وتجربة منشأة على Replit",
    body: "المشروع مرتبط بصفحة Replit الأصلية، مع عرض صور التطبيق الموجودة داخل المستودع نفسه.",
    icon: ExternalLink,
  },
];

const stack = [
  { label: "TypeScript", icon: Braces },
  { label: "pnpm Workspaces", icon: FileText },
  { label: "Express API", icon: Server },
  { label: "PostgreSQL + Drizzle", icon: Database },
];

export function QattahCaseStudy() {
  return (
    <article dir="rtl" lang="ar" className="bg-background text-foreground">
      <section className="border-b border-border pt-24">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Link
              href="/projects"
              className="mb-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              العودة للمشاريع
            </Link>

            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
              <div>
                <p className="mb-4 text-sm font-semibold text-primary">
                  Dev-Mohd/Qattah-app
                </p>
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                  قطّه
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                  صفحة مشروع قطّه الرسمية في البورتفوليو. هذا العرض يعتمد على
                  مستودع GitHub الحقيقي للتطبيق ويعرض روابط المشروع ولقطات من
                  الملفات المرفوعة داخل المستودع.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-border bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
                >
                  <Github className="h-4 w-4" />
                  فتح GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={replitUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted"
                >
                  <ExternalLink className="h-4 w-4" />
                  فتح Replit
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-border py-12 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="border border-border bg-card p-5"
              >
                <Icon className="mb-5 h-6 w-6 text-primary" />
                <h2 className="text-lg font-bold">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-sm font-semibold text-primary">
                Project Source
              </p>
              <h2 className="text-3xl font-bold">لقطات من مشروع قطّه</h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-muted-foreground">
              الصور هنا مأخوذة مباشرة من ملفات `attached_assets` في مستودع
              `qattah-app` حتى تكون صفحة البورتفوليو مرتبطة بالمشروع نفسه.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {screenshots.map((screen, index) => (
              <motion.figure
                key={screen.src}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="overflow-hidden border border-border bg-muted"
              >
                <img
                  src={screen.src}
                  alt={screen.alt}
                  className="aspect-[3/4] h-full w-full object-cover"
                />
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 py-12 lg:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-3 text-sm font-semibold text-primary">
                Tech Stack
              </p>
              <h2 className="text-3xl font-bold">ماذا يحتوي المستودع؟</h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                المستودع العام يحتوي على workspace لتطبيق قطّه، API، مواصفات
                OpenAPI، طبقة قاعدة بيانات، وملفات واجهة/صور مرتبطة بالمشروع.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {stack.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 border border-border bg-background p-4"
                  >
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="border border-border p-6 sm:p-8">
            <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <h2 className="text-2xl font-bold">رابط المشروع الأساسي</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  أي زائر يدخل صفحة قطّه الآن يشوف المستودع الصحيح مباشرة، مع
                  رابط Replit الأصلي إذا احتاج يفتح صفحة المشروع هناك.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-border bg-foreground px-5 py-3 text-sm font-semibold text-background transition-colors hover:bg-foreground/90"
                >
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
                <a
                  href={replitUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-border px-5 py-3 text-sm font-semibold transition-colors hover:bg-muted"
                >
                  Replit
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
