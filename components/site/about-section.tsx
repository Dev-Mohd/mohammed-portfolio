"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, Code2 } from "lucide-react";

export function AboutSection() {
  const features = [
    {
      icon: GraduationCap,
      title: "هندسة برمجيات",
      description: "خريج هندسة برمجيات بفهم عميق للمفاهيم البرمجية والتصميمية",
    },
    {
      icon: Code2,
      title: "تطوير Flutter",
      description: "متخصص في بناء تطبيقات الجوال عالية الأداء باستخدام Flutter",
    },
    {
      icon: Briefcase,
      title: "خبرة عملية",
      description: "خبرة في العمل على مشاريع حقيقية مع فرق تقنية متنوعة",
    },
    {
      icon: Award,
      title: "جودة عالية",
      description: "التركيز على الكود النظيف والهندسة البرمجية السليمة",
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            عني
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            خريج هندسة برمجيات
          </p>
        </motion.div>

        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <p className="text-lg leading-relaxed text-muted-foreground">
            أمتلك شغفًا كبيرًا بتصميم واجهات المستخدم وتجربة المستخدم، وأعمل على بناء تطبيقات عالية الأداء مع التركيز على الكود النظيف والهندسة البرمجية السليمة.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
