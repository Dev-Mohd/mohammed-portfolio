"use client";

import { useState, type ButtonHTMLAttributes } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  CheckCircle2,
  ListChecks,
  Clock,
  CreditCard,
  FileText,
  Bell,
  ShieldCheck,
  ChevronDown,
  WifiOff,
  Zap,
  Lock,
  Download,
  Users,
  BarChart3,
  Moon,
  Palette,
  Database
} from "lucide-react";


const assetBase = "https://raw.githubusercontent.com/Dev-Mohd/qattah-app/main/attached_assets";
const screen1 = assetBase + "/WhatsApp_Image%E2%80%8F_1447-11-30_at_11.54.36_(2)_1779008325210.jpeg";
const screen2 = assetBase + "/WhatsApp_Image%E2%80%8F_1447-11-30_at_11.54.35_(3)_1779008325210.jpeg";
const screen3 = assetBase + "/WhatsApp_Image%E2%80%8F_1447-11-30_at_11.54.36_(3)_1779008325210.jpeg";
const screen4 = assetBase + "/WhatsApp_Image%E2%80%8F_1447-11-30_at_11.54.35_1779008325210.jpeg";
const screen5 = assetBase + "/WhatsApp_Image%E2%80%8F_1447-11-30_at_11.54.35_(2)_1779008325211.jpeg";
const screen6 = assetBase + "/WhatsApp_Image%E2%80%8F_1447-11-30_at_11.54.36_1779008325210.jpeg";
const screen7 = assetBase + "/WhatsApp_Image%E2%80%8F_1447-11-30_at_11.54.35_(1)_1779008325211.jpeg";
const screen8 = assetBase + "/WhatsApp_Image%E2%80%8F_1447-11-30_at_11.54.36_(1)_1779008325210.jpeg";

const QattahIcon = ({ id = "a", size = 40 }: { id?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
    <circle cx="60" cy="60" r="54" fill={`url(#bg${id})`}/>
    <rect x="34" y="28" width="52" height="64" rx="8" fill={`url(#paper${id})`} opacity="0.15"/>
    <rect x="34" y="28" width="52" height="64" rx="8" stroke={`url(#stroke${id})`} strokeWidth="2"/>
    <line x1="44" y1="46" x2="76" y2="46" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round"/>
    <line x1="44" y1="58" x2="76" y2="58" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round" opacity="0.6"/>
    <line x1="44" y1="70" x2="62" y2="70" stroke="#6ee7b7" strokeWidth="2.5" strokeLinecap="round" opacity="0.4"/>
    <circle cx="76" cy="78" r="14" fill={`url(#check${id})`}/>
    <polyline points="70,78 74,83 83,72" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <defs>
      <linearGradient id={`bg${id}`} x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#064e35"/><stop offset="100%" stopColor="#065f46"/>
      </linearGradient>
      <linearGradient id={`paper${id}`} x1="34" y1="28" x2="86" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10b981"/><stop offset="100%" stopColor="#059669"/>
      </linearGradient>
      <linearGradient id={`stroke${id}`} x1="34" y1="28" x2="86" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#34d399"/><stop offset="100%" stopColor="#10b981"/>
      </linearGradient>
      <linearGradient id={`check${id}`} x1="62" y1="64" x2="90" y2="92" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#10b981"/><stop offset="100%" stopColor="#059669"/>
      </linearGradient>
    </defs>
  </svg>
);

const QattahWordmark = ({ className = "text-2xl" }: { className?: string }) => (
  <span className={`font-black text-white tracking-tight ${className}`}>
    قطّ<span className="text-[#10b981]">ه</span>
  </span>
);

const ScreenCard = ({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) => (
  <div className={`relative w-full max-w-sm mx-auto ${className}`}>
    <div className="absolute inset-0 bg-[#10b981]/10 rounded-full blur-3xl scale-75 -z-10" />
    <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/60 ring-1 ring-white/8">
      <img src={src} alt={alt} className="w-full block" />
    </div>
  </div>
);

const AppStoreBadge = ({ className = "" }: { className?: string }) => (
  <a
    href="https://apps.apple.com/us/app/qattah-app/id6768451077"
    target="_blank"
    rel="noopener noreferrer"
    data-testid="badge-appstore"
    className={`inline-flex items-center gap-3 bg-black border border-white/15 rounded-2xl px-5 py-3 hover:border-white/30 hover:bg-white/5 transition-all duration-200 ${className}`}
  >
    <svg width="24" height="28" viewBox="0 0 24 28" fill="white">
      <path d="M20.16 14.77c-.04-3.39 2.77-5.02 2.9-5.09-1.58-2.31-4.04-2.63-4.91-2.66-2.08-.21-4.07 1.23-5.13 1.23-1.06 0-2.69-1.21-4.43-1.18-2.26.04-4.36 1.33-5.52 3.35-2.37 4.1-.61 10.17 1.68 13.5 1.14 1.63 2.47 3.45 4.22 3.39 1.7-.07 2.34-1.09 4.4-1.09 2.05 0 2.65 1.09 4.44 1.05 1.83-.03 2.98-1.65 4.09-3.29 1.3-1.88 1.83-3.7 1.86-3.8-.04-.01-3.57-1.37-3.6-5.41zM16.8 5.19c.94-1.14 1.58-2.72 1.4-4.29-1.35.06-2.98.9-3.94 2.02-.86 1-1.62 2.58-1.42 4.11 1.5.11 3.04-.77 3.96-1.84z"/>
    </svg>
    <div>
      <div className="text-white/50 text-[10px] font-medium leading-none mb-1">Download on the</div>
      <div className="text-white text-[18px] font-bold leading-none tracking-tight">App Store</div>
    </div>
  </a>
);

const GooglePlayBadge = ({ className = "" }: { className?: string }) => (
  <a
    href="#"
    data-testid="badge-playstore"
    className={`inline-flex items-center gap-3 bg-black border border-white/15 rounded-2xl px-5 py-3 hover:border-white/30 hover:bg-white/5 transition-all duration-200 ${className}`}
  >
    <svg width="24" height="26" viewBox="0 0 24 26">
      <path fill="#34A853" d="M0 23.1V2.9c0-.5.3-.9.7-1.1L13.4 13 .7 24.2c-.4-.2-.7-.6-.7-1.1z"/>
      <path fill="#EA4335" d="M17.8 17.3l-4.4-4.3 4.4-4.3 4.9 2.8c1.4.8 1.4 2.2 0 3l-4.9 2.8z"/>
      <path fill="#FBBC05" d="M13.4 13L.7 1.8c.1 0 .2-.1.3-.1.3 0 .6.1.9.3l15.9 9.2-4.4 1.8z"/>
      <path fill="#4285F4" d="M13.4 13l4.4 4.3L1.9 26c-.3.2-.6.3-.9.3-.1 0-.2 0-.3-.1L13.4 13z"/>
    </svg>
    <div>
      <div className="text-white/50 text-[10px] font-medium leading-none mb-1">Get it on</div>
      <div className="text-white text-[18px] font-bold leading-none tracking-tight">Google Play</div>
    </div>
  </a>
);

const Button = ({ children, variant = "primary", className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "primary" | "white" | "outline" }) => {
  const variants: Record<string, string> = {
    primary: "bg-[#10b981] text-black hover:bg-[#10b981]/90 shadow-lg shadow-[#10b981]/20",
    white: "bg-white text-black hover:bg-white/90 shadow-lg shadow-white/10",
    outline: "border border-white/20 bg-transparent hover:bg-white/10 text-white",
  };
  return (
    <button
      className={`px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F0D]/80 backdrop-blur-2xl border-b border-white/5" dir="rtl">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <QattahIcon id="nav" size={38} />
          <QattahWordmark />
        </div>

        <div className="hidden md:flex items-center gap-7">
          <a href="#features" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-features">المميزات</a>
          <a href="#screens" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-screens">الشاشات</a>
          <a href="#how-it-works" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-how-it-works">كيف تعمل</a>
          <a href="#reports" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-reports">التقارير</a>
          <a href="#faq" className="text-sm font-bold text-white/70 hover:text-white transition-colors" data-testid="nav-faq">الأسئلة الشائعة</a>
          <Button variant="primary" className="px-6 py-2.5 text-sm" data-testid="nav-download">حمّل التطبيق</Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)} data-testid="nav-mobile-toggle">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0A0F0D] border-b border-white/5 overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#features" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>المميزات</a>
              <a href="#screens" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>الشاشات</a>
              <a href="#how-it-works" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>كيف تعمل</a>
              <a href="#reports" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>التقارير</a>
              <a href="#faq" className="text-lg font-bold text-white/70 hover:text-white" onClick={() => setIsOpen(false)}>الأسئلة الشائعة</a>
              <Button variant="primary" className="w-full mt-4">حمّل التطبيق</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative pt-40 pb-20 overflow-hidden bg-[#0A0F0D]" dir="rtl">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

    <div className="container mx-auto px-6 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-right"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="flex w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span className="text-sm font-bold text-white/80">التطبيق الأول لإدارة مصاريف الدوام في السعودية</span>
          </div>

          <h1 className="text-[72px] md:text-[88px] font-black text-white leading-[1.1] mb-6 tracking-tight">
            نظّم وجبات الدوام<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#34d399]">وشارك بالعدل</span>
          </h1>

          <p className="text-[18px] md:text-[20px] text-white/55 mb-10 max-w-xl mx-auto lg:mx-0 leading-[1.7] font-medium">
            قطّه يحلّ مشكلة حساب مصاريف الفطور والغداء في الدوام من إضافة الأعضاء وتسجيل الوجبات إلى إصدار تقارير PDF شهرية وإشعارات السداد
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <AppStoreBadge className="w-full sm:w-auto justify-center" />
            <GooglePlayBadge className="w-full sm:w-auto justify-center" />
          </div>

          <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
            <div className="text-center">
              <p className="text-2xl font-black text-white">+1,200</p>
              <p className="text-xs font-bold text-white/30 mt-1 uppercase tracking-[3px]">مستخدم</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-black text-white">4.9 ★</p>
              <p className="text-xs font-bold text-white/30 mt-1 uppercase tracking-[3px]">تقييم المتجر</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-2xl font-black text-white">مجاني</p>
              <p className="text-xs font-bold text-white/30 mt-1 uppercase tracking-[3px]">للتحميل</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          className="flex-1 w-full max-w-sm mx-auto relative"
        >
          <ScreenCard src={screen1} alt="واجهة تطبيق قطّه الرئيسية" />
        </motion.div>
      </div>
    </div>
  </section>
);

const Values = () => {
  const values = [
    { icon: <ListChecks className="w-6 h-6 text-[#10b981]" />, title: "قوائم متعددة", desc: "أنشئ قائمة لكل مجموعة من فطور الدوام إلى غداء الفريق وطلعات الاستراحة" },
    { icon: <Clock className="w-6 h-6 text-[#10b981]" />, title: "حساب تلقائي", desc: "حدّد الحاضرين والتطبيق يوزّع المبلغ بالعدل على من حضر فقط" },
    { icon: <CreditCard className="w-6 h-6 text-[#10b981]" />, title: "تتبع السداد", desc: "تابع السداد الجزئي والكامل لكل عضو واعرف من سدّد ومن لم يسدّد" },
    { icon: <FileText className="w-6 h-6 text-[#10b981]" />, title: "تقارير PDF", desc: "أصدر تقريراً شهرياً احترافياً بهوية قطّه وشاركه مباشرة" },
    { icon: <Bell className="w-6 h-6 text-[#10b981]" />, title: "تذكير يومي", desc: "إشعار يومي يذكّرك بتسجيل الوجبة حتى لا تفوتك أي وجبة" },
    { icon: <ShieldCheck className="w-6 h-6 text-[#10b981]" />, title: "أمان وتشفير", desc: "قاعدة بيانات مشفرة بـ SQLCipher وبياناتك محمية ولا تغادر جهازك" },
  ];

  return (
    <section className="py-24 bg-[#0d1612] border-y border-white/5" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-[#121e17] p-8 rounded-3xl border border-white/5 hover:border-[#10b981]/25 transition-colors group shadow-lg"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#0A0F0D] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border border-white/5">
                {v.icon}
              </div>
              <h3 className="text-[20px] font-black text-white mb-3">{v.title}</h3>
              <p className="text-[18px] text-white/55 font-medium leading-[1.7]">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureBlock = ({
  tag,
  title,
  desc,
  img,
  imgAlt,
  reversed = false,
}: {
  tag: string;
  title: string;
  desc: string;
  img: string;
  imgAlt: string;
  reversed?: boolean;
}) => (
  <div className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16 mb-32`}>
    <motion.div
      initial={{ opacity: 0, x: reversed ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex-1"
    >
      <span className="inline-block text-[11px] font-bold text-[#10b981] bg-[#10b981]/10 border border-[#10b981]/20 px-3 py-1 rounded-full mb-5 tracking-[3px] uppercase">
        {tag}
      </span>
      <h2 className="text-[48px] md:text-[64px] font-black text-white mb-6 leading-tight tracking-tight">
        {title}
      </h2>
      <p className="text-[18px] md:text-[20px] text-white/55 mb-8 font-medium leading-[1.7] max-w-lg">{desc}</p>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: reversed ? 50 : -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex-1 w-full"
    >
      <ScreenCard src={img} alt={imgAlt} />
    </motion.div>
  </div>
);

const Features = () => (
  <section id="features" className="py-32 overflow-hidden bg-[#0A0F0D]" dir="rtl">
    <div className="container mx-auto px-6">
      <FeatureBlock
        tag="إدارة الأعضاء والوجبات"
        title="أضف زملائك والوجبات بسهولة"
        desc="أنشئ قائمتك وأضف أعضاءها وسجّل كل وجبة مع تحديد الحاضرين والتطبيق يوزّع المبلغ على الحاضرين فقط تلقائياً"
        img={screen3}
        imgAlt="إضافة الأعضاء والوجبات"
      />

      <FeatureBlock
        tag="الأرصدة والسداد"
        title="اعرف من له ومن عليه"
        desc="لوحة أرصدة فورية تُظهر رصيد كل عضو من المدين إلى الدائن والمسدّد مع دعم السداد الجزئي والكامل والتتبع الدقيق"
        img={screen4}
        imgAlt="الأرصدة والمديونيات"
        reversed
      />

      <FeatureBlock
        tag="تعدد القوائم"
        title="كل القوائم في مكان واحد"
        desc="قائمة لفطور الدوام وأخرى لغداء الفريق وثالثة لطلعات الاستراحة ولكل مجموعة ملخصها المستقل مع المصاريف والسداد والمتبقي"
        img={screen2}
        imgAlt="القوائم المتعددة"
      />
    </div>
  </section>
);

const HowItWorks = () => {
  const steps = [
    { num: "01", title: "أضف الزملاء", desc: "سجّل أسماء الزملاء المشتركين في القطة" },
    { num: "02", title: "سجّل الوجبة", desc: "اكتب تكلفة الفطور أو الغداء اليومية" },
    { num: "03", title: "احسب القطة", desc: "حدّد الحاضرين والتطبيق يوزّع المبلغ فوراً" },
    { num: "04", title: "شارك التقرير", desc: "في نهاية الشهر أرسل كشف الحساب PDF" },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-[#0d1612] relative border-y border-white/5" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-[48px] md:text-[64px] font-black text-white mb-4 tracking-tight">كيف يعمل التطبيق</h2>
          <p className="text-[20px] text-white/55 font-medium max-w-2xl mx-auto">أربع خطوات بسيطة تريحك من الحسابات اليدوية</p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
          <div className="hidden md:block absolute top-12 right-24 left-24 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent z-0" />
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center w-full md:w-1/4 group"
            >
              <div className="w-24 h-24 rounded-full bg-[#121e17] border border-white/10 flex items-center justify-center text-3xl font-black text-[#10b981] shadow-xl mb-6 shadow-black/50 group-hover:scale-110 transition-transform">
                {step.num}
              </div>
              <h3 className="text-[20px] font-black text-white mb-2">{step.title}</h3>
              <p className="text-[18px] text-white/55 font-medium px-4 leading-[1.7]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AppScreens = () => {
  const screens = [
    { img: screen1, label: "الرئيسية" },
    { img: screen2, label: "القوائم" },
    { img: screen8, label: "الوجبات" },
    { img: screen4, label: "الأرصدة" },
    { img: screen7, label: "الإحصائيات" },
    { img: screen5, label: "التقارير" },
  ];

  return (
    <section id="screens" className="py-32 bg-[#0A0F0D]" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[48px] md:text-[64px] font-black text-white mb-5 tracking-tight">واجهة مصممة بعناية</h2>
          <p className="text-[20px] text-white/55 font-medium max-w-xl mx-auto">
            تجربة مستخدم عربية سلسة وواضحة
          </p>
        </div>

        <div className="flex gap-8 pb-4 snap-x snap-mandatory justify-center flex-wrap md:flex-nowrap">
          {screens.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="snap-center shrink-0 flex flex-col items-center gap-6 w-64"
            >
              <ScreenCard src={s.img} alt={s.label} />
              <div className="text-center mt-2">
                <span className="text-[11px] font-bold text-white/30 tracking-[3px] uppercase px-4 py-2 rounded-full border border-white/5 bg-white/5">
                  {s.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reports = () => (
  <section id="reports" className="py-32 bg-[#0d1612] border-y border-white/5" dir="rtl">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1"
        >
          <h2 className="text-[48px] md:text-[64px] font-black text-white mb-6 leading-tight tracking-tight">
            تقارير شهرية واضحة واحترافية
          </h2>
          <p className="text-[18px] md:text-[20px] text-white/55 mb-8 font-medium leading-[1.7]">
            في نهاية كل شهر وبضغطة زر واحدة أصدر تقريراً كاملاً ومفصلاً يوضّح كل شيء لكل عضو
          </p>
          <ul className="space-y-4 mb-8">
            {[
              "ملخص عام للمصاريف والمديونيات",
              "تفصيل كامل لكل وجبة وتكلفتها",
              "رصيد كل عضو بالهللة",
              "تصدير بتنسيق PDF احترافي وجاهز للمشاركة"
            ].map((b, i) => (
              <li key={i} className="flex items-center gap-3 text-[18px] text-white font-medium">
                <CheckCircle2 className="w-5 h-5 text-[#10b981] shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-sm mx-auto"
        >
          <ScreenCard src={screen5} alt="تقارير قطّه" />
        </motion.div>
      </div>
    </div>
  </section>
);

const AdvancedFeatures = () => {
  const features = [
    { icon: <WifiOff />, title: "يعمل بدون إنترنت", desc: "سجّل الوجبات في أي وقت وأي مكان حتى بدون اتصال بالشبكة" },
    { icon: <Database />, title: "تخزين محلي", desc: "بياناتك تُحفظ على جهازك فقط لضمان الخصوصية التامة" },
    { icon: <Users />, title: "أعضاء غير محدودين", desc: "أضف العدد الذي تحتاجه من الزملاء بدون أي قيود" },
    { icon: <Palette />, title: "الوضع الليلي والنهاري", desc: "واجهة تتكيّف مع تفضيلاتك وتدعم الوضع المظلم بالكامل" },
    { icon: <Download />, title: "نسخ احتياطي", desc: "احفظ نسخة من بياناتك واسترجعها في أي وقت" },
    { icon: <ShieldCheck />, title: "حماية بالبصمة", desc: "قفل التطبيق باستخدام بصمة الوجه أو الإصبع لمزيد من الأمان" },
    { icon: <BarChart3 />, title: "إحصائيات تفصيلية", desc: "رسوم بيانية توضّح معدل الصرف الشهري والتغيرات" },
    { icon: <Moon />, title: "إشعارات ذكية", desc: "تنبيهات بأوقات الوجبات والسداد المستحق" },
  ];

  return (
    <section className="py-32 bg-[#0A0F0D]" dir="rtl">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-[48px] md:text-[64px] font-black text-white mb-5 tracking-tight">مزايا متقدمة</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[#121e17] p-6 rounded-3xl border border-white/5 flex flex-col gap-4"
            >
              <div className="text-[#10b981]">{f.icon}</div>
              <div>
                <h3 className="text-[18px] font-black text-white mb-2">{f.title}</h3>
                <p className="text-[16px] text-white/55 leading-[1.7]">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SimpleWorkflow = () => (
  <section className="py-24 bg-[#0d1612] border-y border-white/5" dir="rtl">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <WifiOff className="w-10 h-10 text-[#10b981]" />, title: "بدون إنترنت", desc: "تطبيق قطّه يعمل بكامل مزاياه حتى بدون اتصال بالإنترنت" },
          { icon: <Zap className="w-10 h-10 text-[#10b981]" />, title: "إعداد في ثوانٍ", desc: "لا يحتاج إلى إنشاء حساب احمل التطبيق وابدأ مباشرة بإضافة زملائك" },
          { icon: <Lock className="w-10 h-10 text-[#10b981]" />, title: "بياناتك مشفرة", desc: "نستخدم SQLCipher لحماية قاعدة بياناتك محلياً على جهازك" },
        ].map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#121e17] p-10 rounded-[2rem] border border-white/5 text-center flex flex-col items-center shadow-lg"
          >
            <div className="mb-6">{card.icon}</div>
            <h3 className="text-[24px] font-black text-white mb-3">{card.title}</h3>
            <p className="text-[18px] text-white/55 font-medium leading-[1.7]">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [
    { q: "هل التطبيق مجاني", a: "نعم تطبيق قطّه مجاني بالكامل للتحميل والاستخدام الأساسي" },
    { q: "هل يحتاج الأعضاء تحميل التطبيق", a: "لا يكفي أن يقوم شخص واحد بتحميل التطبيق وإدارة القائمة وإرسال التقارير للبقية" },
    { q: "هل بياناتي محفوظة في السحابة", a: "لا فكل بياناتك مشفرة ومحفوظة محلياً في جهازك لضمان الخصوصية التامة" },
    { q: "كيف تتم عملية السداد", a: "التطبيق لا يقوم بتحويل الأموال وهو يحسب فقط من له ومن عليه والتحويل يتم بينكم كالمعتاد" },
    { q: "هل يدعم التطبيق السداد الجزئي", a: "نعم يمكنك تسجيل سداد جزئي لأي عضو وسيقوم التطبيق بحساب المتبقي تلقائياً" },
    { q: "هل يمكن استخدام التطبيق لطلعات الاستراحة وليس الدوام فقط", a: "بالتأكيد يمكنك إنشاء قوائم متعددة بأي اسم كالدوام والاستراحة والسفر وغيرها" },
  ];

  return (
    <section id="faq" className="py-32 bg-[#0A0F0D]" dir="rtl">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-[48px] md:text-[64px] font-black text-white mb-5 tracking-tight">الأسئلة الشائعة</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border border-white/5 bg-[#121e17] rounded-2xl overflow-hidden"
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-right"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-[18px] font-bold text-white">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-white/50 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-5 pt-0 text-[16px] text-white/55 font-medium leading-[1.7] border-t border-white/5 mt-2 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="py-24 bg-[#0A0F0D]" dir="rtl">
    <div className="container mx-auto px-6">
      <div className="bg-gradient-to-br from-[#065F46] to-[#042f23] rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden border border-white/10 shadow-2xl">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#10b981]/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="relative z-10">
          <h2 className="text-[48px] md:text-[64px] font-black text-white mb-6 tracking-tight leading-tight">
            هل أنت مستعد للتخلص من الحسابات اليدوية
          </h2>
          <p className="text-[20px] text-white/80 font-medium mb-10 max-w-xl mx-auto leading-[1.7]">
            حمّل قطّه الآن وابدأ بتنظيم مصاريف الدوام في ثوانٍ
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center">
            <AppStoreBadge className="w-full sm:w-auto justify-center" />
            <GooglePlayBadge className="w-full sm:w-auto justify-center" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-[#0A0F0D] pt-16 pb-8 border-t border-white/5" dir="rtl">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex items-center gap-3">
          <QattahIcon id="footer" size={32} />
          <QattahWordmark className="text-xl" />
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#features" className="text-sm font-bold text-white/50 hover:text-white transition-colors">المميزات</a>
          <a href="#screens" className="text-sm font-bold text-white/50 hover:text-white transition-colors">الشاشات</a>
          <a href="#how-it-works" className="text-sm font-bold text-white/50 hover:text-white transition-colors">كيف تعمل</a>
          <a href="#faq" className="text-sm font-bold text-white/50 hover:text-white transition-colors">الأسئلة الشائعة</a>
        </div>
      </div>
      <div className="text-center text-white/30 text-sm font-medium">
        © {new Date().getFullYear()} تطبيق قطّه. جميع الحقوق محفوظة.
      </div>
    </div>
  </footer>
);

export function QattahCaseStudy() {
  return (
    <div className="min-h-screen bg-[#0A0F0D] text-white selection:bg-[#10b981] selection:text-black">
      <Navbar />
      <Hero />
      <Values />
      <Features />
      <HowItWorks />
      <AppScreens />
      <Reports />
      <AdvancedFeatures />
      <SimpleWorkflow />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
