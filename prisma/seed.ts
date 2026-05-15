import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const hashedPassword = await bcrypt.hash("admin123", 10);

  await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: {},
    create: {
      email: "admin@example.com",
      name: "Admin",
      password: hashedPassword,
      role: "admin",
    },
  });

  // Create profile
  await prisma.profile.upsert({
    where: { id: "1" },
    update: {},
    create: {
      id: "1",
      name: "محمد الشهري",
      title: "مطور تطبيقات متنقلة",
      subtitle: "Flutter Developer & Software Engineer",
      bio: "خريج هندسة برمجيات، متخصص في تطوير تطبيقات الجوال باستخدام Flutter. أمتلك شغفًا كبيرًا بتصميم واجهات المستخدم وتجربة المستخدم، وأعمل على بناء تطبيقات عالية الأداء مع التركيز على الكود النظيف والهندسة البرمجية السليمة.",
      email: "mohammed@example.com",
      location: "المملكة العربية السعودية",
    },
  });

  // Create social links
  const socialLinks = [
    { platform: "GitHub", url: "https://github.com/mohammed", icon: "github", order: 1 },
    { platform: "LinkedIn", url: "https://linkedin.com/in/mohammed", icon: "linkedin", order: 2 },
    { platform: "Twitter", url: "https://twitter.com/mohammed", icon: "twitter", order: 3 },
  ];

  for (const link of socialLinks) {
    await prisma.socialLink.upsert({
      where: { id: link.platform },
      update: {},
      create: { ...link, id: link.platform },
    });
  }

  // Create skills
  const skills = [
    { name: "Dart", category: "لغات البرمجة", icon: "code", proficiency: 95, order: 1 },
    { name: "JavaScript", category: "لغات البرمجة", icon: "code", proficiency: 85, order: 2 },
    { name: "TypeScript", category: "لغات البرمجة", icon: "code", proficiency: 80, order: 3 },
    { name: "Python", category: "لغات البرمجة", icon: "code", proficiency: 70, order: 4 },
    { name: "Flutter", category: "الأطر والتقنيات", icon: "smartphone", proficiency: 95, order: 5 },
    { name: "React", category: "الأطر والتقنيات", icon: "globe", proficiency: 80, order: 6 },
    { name: "Next.js", category: "الأطر والتقنيات", icon: "globe", proficiency: 75, order: 7 },
    { name: "Node.js", category: "الأطر والتقنيات", icon: "server", proficiency: 70, order: 8 },
    { name: "Firebase", category: "الأطر والتقنيات", icon: "database", proficiency: 85, order: 9 },
    { name: "Git", category: "الأدوات", icon: "git-branch", proficiency: 90, order: 10 },
    { name: "Docker", category: "الأدوات", icon: "container", proficiency: 60, order: 11 },
    { name: "Figma", category: "الأدوات", icon: "pen-tool", proficiency: 75, order: 12 },
  ];

  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { id: skill.name },
      update: {},
      create: { ...skill, id: skill.name },
    });
  }

  // Create sample projects
  const projects = [
    {
      id: "1",
      slug: "hesabna",
      title: "حسابنا",
      subtitle: "تطبيق تتبع الوجبات والسعرات الحرارية",
      description: "تطبيق متكامل لتتبع الوجبات اليومية وحساب السعرات الحرارية مع واجهة مستخدم جميلة وسهلة الاستخدام.",
      content: "## نظرة عامة\n\nحسابنا هو تطبيق متكامل لتتبع الوجبات اليومية وحساب السعرات الحرارية.\n\n## المميزات\n- تتبع الوجبات اليومية\n- حساب السعرات الحرارية تلقائيًا\n- إحصائيات ورسوم بيانية\n- دعم اللغتين العربية والإنجليزية\n\n## التقنيات المستخدمة\n- Flutter\n- Firebase\n- Provider\n- SQLite",
      tags: ["Flutter", "Firebase", "Mobile"],
      technologies: ["Flutter", "Dart", "Firebase", "SQLite"],
      featured: true,
      order: 1,
    },
    {
      id: "2",
      slug: "qattah",
      title: "قطه",
      subtitle: "تطبيق إدارة المهام والقوائم",
      description: "تطبيق أنيق لإدارة المهام والقوائم مع تصميم عصري يعتمد على نظام Q6H للتصميم.",
      content: "## نظرة عامة\n\nقطه هو تطبيق أنيق لإدارة المهام والقوائم.\n\n## المميزات\n- إنشاء قوائم متعددة\n- إدارة المهام بسهولة\n- تصميم عصري ومينيمال\n- دعم الوضع المظلم\n\n## التقنيات المستخدمة\n- Flutter\n- Riverpod\n- SQLite\n- IBM Plex Sans Arabic",
      tags: ["Flutter", "Riverpod", "Design System"],
      technologies: ["Flutter", "Dart", "Riverpod", "SQLite"],
      featured: true,
      order: 2,
    },
    {
      id: "3",
      slug: "portfolio",
      title: "موقع Portfolio",
      subtitle: "موقع شخصي احترافي",
      description: "موقع Portfolio احترافي بنيته باستخدام Next.js مع داشبورد للتحكم الكامل في المحتوى.",
      content: "## نظرة عامة\n\nموقع Portfolio احترافي بنيته باستخدام Next.js.\n\n## المميزات\n- تصميم مستوحى من Apple\n- داشبورد للتحكم\n- ثنائي اللغة\n- SEO ممتاز\n\n## التقنيات المستخدمة\n- Next.js\n- TypeScript\n- Tailwind CSS\n- PostgreSQL",
      tags: ["Next.js", "TypeScript", "Full-stack"],
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      featured: false,
      order: 3,
    },
  ];

  for (const project of projects) {
    await prisma.project.upsert({
      where: { id: project.id },
      update: {},
      create: project,
    });
  }

  // Create sample experience
  const experiences = [
    {
      id: "1",
      company: "شركة تقنية",
      role: "مطور Flutter",
      description: "تطوير تطبيقات الجوال باستخدام Flutter وإدارة الفريق التقني.",
      startDate: new Date("2023-01-01"),
      current: true,
      location: "الرياض",
      order: 1,
    },
    {
      id: "2",
      company: "شركة ناشئة",
      role: "مطور Full Stack",
      description: "تطوير حلول تقنية متكاملة للعملاء.",
      startDate: new Date("2022-06-01"),
      endDate: new Date("2022-12-31"),
      current: false,
      location: "جدة",
      order: 2,
    },
  ];

  for (const exp of experiences) {
    await prisma.experience.upsert({
      where: { id: exp.id },
      update: {},
      create: exp,
    });
  }

  console.log("✅ Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
