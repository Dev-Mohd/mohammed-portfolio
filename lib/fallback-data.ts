import type { Experience, Profile, Project, Skill } from "@/types";

const now = new Date("2026-01-01T00:00:00.000Z");

export const fallbackProfile: Profile = {
  id: "fallback-profile",
  name: "محمد الشهري",
  title: "مطور تطبيقات",
  subtitle: "خريج هندسة برمجيات - متخصص في Flutter",
  bio: "أمتلك شغفًا كبيرًا بتصميم واجهات المستخدم وتجربة المستخدم، وأعمل على بناء تطبيقات عالية الأداء مع التركيز على الكود النظيف والهندسة البرمجية السليمة.",
  email: "hello@dev-mohd.com",
  phone: null,
  location: "المملكة العربية السعودية",
  avatar: null,
  resumeUrl: null,
  createdAt: now,
  updatedAt: now,
};

export const fallbackSkills: Skill[] = [
  { id: "Flutter", name: "Flutter", category: "تطوير التطبيقات", icon: null, proficiency: 92, order: 1, createdAt: now, updatedAt: now },
  { id: "Dart", name: "Dart", category: "تطوير التطبيقات", icon: null, proficiency: 90, order: 2, createdAt: now, updatedAt: now },
  { id: "Riverpod", name: "Riverpod", category: "تطوير التطبيقات", icon: null, proficiency: 86, order: 3, createdAt: now, updatedAt: now },
  { id: "Next.js", name: "Next.js", category: "تطوير الويب", icon: null, proficiency: 82, order: 4, createdAt: now, updatedAt: now },
  { id: "TypeScript", name: "TypeScript", category: "تطوير الويب", icon: null, proficiency: 84, order: 5, createdAt: now, updatedAt: now },
  { id: "UI/UX", name: "UI/UX", category: "التصميم", icon: null, proficiency: 88, order: 6, createdAt: now, updatedAt: now },
  { id: "Figma", name: "Figma", category: "التصميم", icon: null, proficiency: 78, order: 7, createdAt: now, updatedAt: now },
  { id: "SQLite", name: "SQLite", category: "قواعد البيانات", icon: null, proficiency: 84, order: 8, createdAt: now, updatedAt: now },
];

export const fallbackProjects: Project[] = [
  {
    id: "2",
    slug: "qattah",
    title: "قطّه",
    subtitle: "Qattah-app على GitHub",
    description:
      "مشروع TypeScript لإدارة مصاريف القطة والمجموعات، مرتبط بمستودع GitHub العام وصفحة Replit الأصلية.",
    content:
      "## نظرة عامة\n\nقطّه مشروع لإدارة المصاريف المشتركة والمجموعات.\n\n## الروابط\n- GitHub: https://github.com/Dev-Mohd/qattah-app\n- Replit: https://replit.com/@devmohd/Qatta-Meal-Plan",
    thumbnail: null,
    images: [],
    tags: ["TypeScript", "Replit", "Expense Tracking"],
    technologies: ["TypeScript", "pnpm Workspaces", "Express", "PostgreSQL", "Drizzle"],
    githubUrl: "https://github.com/Dev-Mohd/qattah-app",
    liveUrl: "https://replit.com/@devmohd/Qatta-Meal-Plan",
    featured: true,
    published: true,
    order: 1,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "3",
    slug: "portfolio",
    title: "موقع Portfolio",
    subtitle: "موقع شخصي احترافي",
    description:
      "موقع Portfolio احترافي مبني باستخدام Next.js مع واجهة عربية ولوحة تحكم لإدارة المحتوى.",
    content:
      "## نظرة عامة\n\nموقع شخصي لعرض الأعمال والخبرات والمهارات بطريقة احترافية.\n\n## المميزات\n- تصميم مستوحى من Apple\n- واجهة عربية RTL\n- صفحات مشاريع تفصيلية\n- SEO مناسب",
    thumbnail: null,
    images: [],
    tags: ["Next.js", "TypeScript", "Portfolio"],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    published: true,
    order: 2,
    createdAt: now,
    updatedAt: now,
  },
];

export const fallbackExperiences: Experience[] = [
  {
    id: "fallback-experience",
    company: "مشاريع مستقلة",
    role: "مطور Flutter وواجهات رقمية",
    description:
      "تصميم وتطوير تطبيقات جوال وتجارب ويب عربية مع التركيز على الأداء وتجربة المستخدم.",
    startDate: new Date("2023-01-01T00:00:00.000Z"),
    endDate: null,
    current: true,
    location: "السعودية",
    order: 1,
    createdAt: now,
    updatedAt: now,
  },
];
