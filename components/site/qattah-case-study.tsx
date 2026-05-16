"use client";

import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import {
  ArrowLeft,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  CircleDollarSign,
  Database,
  FileText,
  ListChecks,
  ReceiptText,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UsersRound,
  WalletCards,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

const tags = ["UI/UX Design", "Mobile App", "RTL Arabic", "Fintech Productivity"];

const overviewCards = [
  {
    title: "المشكلة",
    body: "الحسابات اليدوية تسبب نسيان، اختلافات، وصعوبة في معرفة من حضر ومن دفع.",
    icon: ReceiptText,
  },
  {
    title: "الحل",
    body: "تسجيل حضور ومصاريف يومية مع حساب تلقائي لنصيب كل شخص.",
    icon: ListChecks,
  },
  {
    title: "النتيجة",
    body: "تجربة أكثر شفافية وسرعة لفِرق العمل والاستراحات والمجموعات اليومية.",
    icon: CheckCircle2,
  },
];

const features = [
  ["تسجيل الحضور اليومي", "اختيار الحاضرين لكل وجبة بخطوات قليلة.", CalendarCheck],
  ["حساب تلقائي للنصيب", "تقسيم المبلغ مباشرة بناءً على عدد الحاضرين.", CircleDollarSign],
  ["تتبع المصروفات", "عرض واضح لكل وجبة ومبلغها وتاريخها.", ReceiptText],
  ["تقارير شهرية", "ملخصات دقيقة للمصاريف والحضور والمتوسطات.", BarChart3],
  ["إدارة الزملاء", "إضافة الأعضاء والقوائم وتعديلها بسهولة.", UsersRound],
  ["يعمل بدون إنترنت", "تجربة محلية سريعة مناسبة لبيئة العمل.", Database],
  ["واجهة عربية RTL", "تصميم عربي كامل من اليمين لليسار.", Smartphone],
  ["شفافية كاملة لكل وجبة", "تفاصيل واضحة تقلل سوء الفهم في الحسابات.", ShieldCheck],
] as const;

const screens = [
  {
    title: "الشاشة الرئيسية",
    caption: "فريقك معك حتى بدون إنترنت",
    accent: "emerald",
  },
  {
    title: "تسجيل الحضور",
    caption: "سجّل الحضور يومياً",
    accent: "mint",
  },
  {
    title: "حساب النصيب",
    caption: "احسب النصيب تلقائياً",
    accent: "blue",
  },
  {
    title: "السجلات",
    caption: "كل المصروفات واضحة",
    accent: "emerald",
  },
  {
    title: "التقارير الشهرية",
    caption: "تقارير شهرية دقيقة",
    accent: "mint",
  },
] as const;

const flow = [
  ["إنشاء قائمة للفريق", "أضف الزملاء وحدد المجموعة المناسبة."],
  ["تسجيل الوجبة والحضور", "اختر الحاضرين وأدخل مبلغ الوجبة."],
  ["حساب النصيب تلقائياً", "يعرض التطبيق نصيب كل شخص والتفاصيل كاملة."],
];

function SectionHeader({
  eyebrow,
  title,
  body,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55 }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold text-[#10B981]">{eyebrow}</p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
        {title}
      </h2>
      {body && (
        <p className="mt-4 text-lg leading-8 text-[#64748B]">{body}</p>
      )}
    </motion.div>
  );
}

function QattahLogo() {
  return (
    <div className="flex items-center gap-3">
      <div className="grid h-14 w-14 place-items-center rounded-[1.25rem] bg-gradient-to-br from-[#064E35] to-[#10B981] shadow-lg shadow-emerald-900/20">
        <FileText className="h-7 w-7 text-white" />
      </div>
      <div>
        <p className="text-3xl font-black tracking-tight text-[#111827]">قطّه</p>
        <p className="text-xs font-medium text-[#64748B]">
          حساب واضح. يوم أسهل.
        </p>
      </div>
    </div>
  );
}

function PhoneMockup({
  variant = "home",
  label,
}: {
  variant?: "home" | "attendance" | "share" | "records" | "reports";
  label?: string;
}) {
  const isReports = variant === "reports";
  const isAttendance = variant === "attendance";
  const isShare = variant === "share";
  const isRecords = variant === "records";

  return (
    <div className="mx-auto w-full max-w-[310px] rounded-[2.8rem] border border-slate-200 bg-[#111827] p-2 shadow-2xl shadow-emerald-950/20">
      <div className="relative overflow-hidden rounded-[2.35rem] bg-[#F8FAFC]">
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-[#111827]" />
        <div className="min-h-[560px] px-5 pb-5 pt-12">
          <div className="mb-5 flex items-start justify-between">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-[#064E35] shadow-sm">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="text-right">
              <p className="text-xs text-[#64748B]">السلام عليكم</p>
              <p className="text-xl font-bold text-[#111827]">محمد</p>
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-gradient-to-br from-[#064E35] to-[#10B981] p-5 text-white shadow-xl shadow-emerald-900/20">
            <div className="mb-8 flex items-center justify-between">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs">
                {isReports ? "مايو 2026" : "المتبقي هذا الشهر"}
              </span>
              <WalletCards className="h-6 w-6 text-white/80" />
            </div>
            <p className="text-4xl font-black">
              {isReports ? "1,250" : isShare ? "22.50" : "658.00"}
              <span className="ms-2 text-xl">ر.س</span>
            </p>
            <div className="mt-5 grid grid-cols-2 gap-2 text-xs">
              <div className="rounded-2xl bg-white/15 px-3 py-3">
                مصاريف
                <strong className="mt-1 block text-base">710</strong>
              </div>
              <div className="rounded-2xl bg-white/15 px-3 py-3">
                سداد
                <strong className="mt-1 block text-base">52</strong>
              </div>
            </div>
          </div>

          {isAttendance ? (
            <div className="mt-5 space-y-3">
              {["ماجد", "عبدالله", "فارس", "نادر"].map((name) => (
                <div
                  key={name}
                  className="flex items-center justify-between rounded-2xl bg-[#ECFDF5] px-4 py-3"
                >
                  <span className="font-semibold text-[#064E35]">{name}</span>
                  <CheckCircle2 className="h-6 w-6 text-[#10B981]" />
                </div>
              ))}
            </div>
          ) : isReports ? (
            <div className="mt-5 rounded-3xl bg-white p-4 shadow-sm">
              <div className="mb-4 grid grid-cols-3 gap-2 text-center text-xs">
                {["36 وجبة", "8 أعضاء", "156 متوسط"].map((item) => (
                  <div key={item} className="rounded-2xl bg-[#F8FAFC] py-3">
                    {item}
                  </div>
                ))}
              </div>
              <div className="flex h-28 items-end gap-2 rounded-2xl bg-[#F8FAFC] p-3">
                {[34, 62, 45, 74, 52, 88, 67].map((height, index) => (
                  <span
                    key={index}
                    className="flex-1 rounded-t-md bg-[#10B981]"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
            </div>
          ) : isRecords ? (
            <div className="mt-5 space-y-3">
              {["فطور الدوام", "غداء الخميس", "قهوة ومخبوزات"].map((item, i) => (
                <div key={item} className="rounded-2xl bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-[#111827]">{item}</p>
                    <span className="text-sm font-bold text-[#10B981]">
                      {i === 0 ? "90" : i === 1 ? "119" : "67"} ر.س
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#64748B]">4 حاضرين</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-5 grid grid-cols-3 gap-3">
              {["قوائم", "أعضاء", "وجبات"].map((item, index) => (
                <div key={item} className="rounded-2xl bg-white p-4 text-center shadow-sm">
                  <p className="text-xs text-[#64748B]">{item}</p>
                  <p className="mt-2 text-2xl font-black text-[#111827]">
                    {[1, 15, 36][index]}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="mt-5 rounded-3xl bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-center justify-between">
              <p className="font-bold text-[#111827]">
                {label ?? "آخر نشاط"}
              </p>
              <span className="text-xs text-[#10B981]">واضح</span>
            </div>
            <div className="space-y-2">
              {["سداد فارس", "مطبق", "فلافل"].map((item, index) => (
                <div key={item} className="flex items-center justify-between text-sm">
                  <span className="text-[#111827]">{item}</span>
                  <span className={index === 0 ? "text-[#10B981]" : "text-red-500"}>
                    {index === 0 ? "-52" : index === 1 ? "119" : "67"} ر.س
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardMockup() {
  return (
    <div className="rounded-[2rem] border border-emerald-100 bg-white p-5 shadow-xl shadow-emerald-950/10">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-[#64748B]">تقرير مايو</p>
          <h3 className="text-2xl font-black text-[#064E35]">ملخص المصروفات</h3>
        </div>
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#ECFDF5] text-[#064E35]">
          <BarChart3 className="h-6 w-6" />
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-4">
        {[
          ["عدد الوجبات", "36"],
          ["إجمالي المصروفات", "1,250"],
          ["عدد الأعضاء", "8"],
          ["متوسط النصيب", "156"],
        ].map(([label, value]) => (
          <div key={label} className="rounded-2xl border border-slate-100 bg-[#F8FAFC] p-4">
            <p className="text-xs text-[#64748B]">{label}</p>
            <p className="mt-2 text-2xl font-black text-[#111827]">{value}</p>
          </div>
        ))}
      </div>
      <div className="mt-5 flex h-56 items-end gap-3 rounded-3xl bg-[#F8FAFC] p-5">
        {[38, 64, 50, 45, 76, 41, 55, 88, 61, 52, 34, 48].map((height, index) => (
          <span
            key={index}
            className="flex-1 rounded-t-xl bg-gradient-to-t from-[#064E35] to-[#10B981]"
            style={{ height: `${height}%` }}
          />
        ))}
      </div>
    </div>
  );
}

export function QattahCaseStudy() {
  return (
    <article dir="rtl" lang="ar" className="bg-[#F8FAFC] text-[#0F172A]">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(16,185,129,0.18),transparent_30%),linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)] pt-24">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/80 px-4 py-2 text-sm font-semibold text-[#064E35] shadow-sm backdrop-blur"
            >
              <ArrowLeft className="h-4 w-4" />
              العودة للمشاريع
            </Link>

            <QattahLogo />
            <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#10B981]">
              Mobile App / Fintech Productivity / Saudi Startup
            </p>
            <h1 className="mt-4 max-w-4xl text-5xl font-black leading-tight tracking-tight text-[#111827] sm:text-6xl lg:text-7xl">
              قطّه
            </h1>
            <h2 className="mt-4 text-2xl font-bold leading-snug text-[#064E35] sm:text-3xl">
              قطّه — تطبيق سعودي لتنظيم وجبات العمل والحسابات الجماعية
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-[#64748B]">
              صممنا قطّه ليجعل تنظيم الوجبات اليومية في العمل أسهل وأكثر
              وضوحاً، من تسجيل الحضور إلى حساب نصيب كل شخص بشفافية كاملة.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-semibold text-[#064E35] shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#showcase"
                className="rounded-full bg-[#064E35] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-emerald-900/20 transition hover:-translate-y-0.5 hover:bg-[#053f2b]"
              >
                مشاهدة الواجهة
              </a>
              <a
                href="#overview"
                className="rounded-full border border-emerald-200 bg-white px-7 py-4 text-sm font-bold text-[#064E35] shadow-sm transition hover:-translate-y-0.5 hover:border-[#10B981]"
              >
                تفاصيل المشروع
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute inset-8 rounded-full bg-[#10B981]/20 blur-3xl" />
            <PhoneMockup variant="home" />
          </motion.div>
        </div>
      </section>

      <section id="overview" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="نظرة عامة على المشروع"
            body="قطّه تطبيق سعودي يساعد الزملاء على إدارة المصاريف المشتركة للوجبات اليومية داخل بيئة العمل. يركز التطبيق على الوضوح، تقليل الحسابات اليدوية، وتوفير تجربة عربية سهلة وسريعة."
          />
          <div className="grid gap-5 md:grid-cols-3">
            {overviewCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-sm shadow-emerald-950/5"
                >
                  <div className="mb-6 grid h-12 w-12 place-items-center rounded-2xl bg-[#ECFDF5] text-[#064E35]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-2xl font-black text-[#111827]">{card.title}</h3>
                  <p className="mt-4 leading-8 text-[#64748B]">{card.body}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader eyebrow="Features" title="ميزات مصممة للاستخدام اليومي" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(([title, body, Icon], index) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="rounded-[1.75rem] border border-slate-100 bg-[#F8FAFC] p-6 transition hover:-translate-y-1 hover:border-emerald-100 hover:bg-white hover:shadow-xl hover:shadow-emerald-950/5"
              >
                <Icon className="mb-5 h-7 w-7 text-[#10B981]" />
                <h3 className="text-lg font-black text-[#111827]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#64748B]">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="showcase" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="واجهات التطبيق"
            body="Mockups مبنية داخل الصفحة لتوضيح تجربة قطّه الأساسية من الهوم حتى التقرير الشهري."
          />
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
            {screens.map((screen, index) => (
              <motion.div
                key={screen.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="text-center"
              >
                <PhoneMockup
                  variant={
                    index === 1
                      ? "attendance"
                      : index === 2
                        ? "share"
                        : index === 3
                          ? "records"
                          : index === 4
                            ? "reports"
                            : "home"
                  }
                  label={screen.title}
                />
                <h3 className="mt-5 text-lg font-black text-[#111827]">
                  {screen.title}
                </h3>
                <p className="mt-2 text-sm text-[#64748B]">{screen.caption}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="نظام التصميم" body="هوية هادئة وعملية تجمع بين الثقة المالية وسرعة الاستخدام اليومي." />
          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] border border-slate-100 bg-[#F8FAFC] p-7">
              <h3 className="text-xl font-black text-[#111827]">لوحة الألوان</h3>
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-5 lg:grid-cols-2">
                {[
                  ["#064E35", "Primary"],
                  ["#10B981", "Accent"],
                  ["#ECFDF5", "Light Mint"],
                  ["#111827", "Dark"],
                  ["#FFFFFF", "White"],
                ].map(([color, name]) => (
                  <div key={color} className="rounded-2xl border border-slate-100 bg-white p-3">
                    <div
                      className="h-16 rounded-xl border border-slate-100"
                      style={{ backgroundColor: color }}
                    />
                    <p className="mt-3 text-sm font-bold text-[#111827]">{name}</p>
                    <p className="text-xs text-[#64748B]">{color}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-[2rem] border border-slate-100 bg-[#F8FAFC] p-7">
                <h3 className="text-xl font-black text-[#111827]">Typography</h3>
                <p className="mt-4 text-5xl font-black text-[#064E35]">أبجد هوز</p>
                <p className="mt-3 leading-8 text-[#64748B]">
                  خط عربي واضح، وزن عريض للعناوين، ونصوص مريحة للقراءة في البطاقات والتقارير.
                </p>
              </div>
              <div className="rounded-[2rem] border border-slate-100 bg-[#F8FAFC] p-7">
                <h3 className="text-xl font-black text-[#111827]">Components</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {["Buttons", "Cards", "iPhone Mockups", "Status badges", "Dashboard cards"].map((item) => (
                    <span key={item} className="rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-bold text-[#064E35]">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="رحلة المستخدم" />
          <div className="grid gap-5 md:grid-cols-3">
            {flow.map(([title, body], index) => (
              <motion.div
                key={title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="relative rounded-[2rem] border border-emerald-100 bg-white p-7 shadow-sm"
              >
                <div className="mb-8 grid h-12 w-12 place-items-center rounded-2xl bg-[#064E35] text-lg font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black text-[#111827]">{title}</h3>
                <p className="mt-3 leading-8 text-[#64748B]">{body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <p className="mb-3 text-sm font-bold text-[#10B981]">Transparency</p>
            <h2 className="text-4xl font-black leading-tight text-[#111827]">
              كل شيء واضح من أول ريال لآخر ريال
            </h2>
            <p className="mt-5 text-lg leading-9 text-[#64748B]">
              يعرض قطّه من حضر، كم كانت قيمة الوجبة، وكم نصيب كل شخص، مما يقلل سوء الفهم ويجعل الحسابات اليومية أكثر وضوحاً.
            </p>
          </motion.div>
          <PhoneMockup variant="share" label="تفاصيل المصروف" />
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="تقارير شهرية مبسطة"
            body="يوفر التطبيق ملخصات شهرية لإجمالي المصروفات، عدد الوجبات، متوسط نصيب الفرد، وحضور الأعضاء."
          />
          <DashboardMockup />
        </div>
      </section>

      <section className="px-4 pb-24 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-[#064E35] to-[#111827] p-8 text-center text-white shadow-2xl shadow-emerald-950/20 sm:p-12"
        >
          <h2 className="text-3xl font-black sm:text-5xl">
            مشروع مصمم لتجربة يومية واضحة
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-9 text-white/75">
            قطّه يجمع بين البساطة، الشفافية، وتجربة عربية مصممة خصيصاً لبيئة العمل في السعودية.
          </p>
          <Link
            href="/projects"
            className="mt-8 inline-flex rounded-full bg-white px-7 py-4 text-sm font-black text-[#064E35] transition hover:-translate-y-0.5"
          >
            العودة إلى المشاريعي
          </Link>
        </motion.div>
      </section>
    </article>
  );
}
