import type { Metadata } from "next";
import { QattahCaseStudy } from "@/components/site/qattah-case-study";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "قطّه — تطبيق سعودي لتنظيم وجبات العمل والحسابات الجماعية",
  description:
    "Case Study لتطبيق قطّه: تطبيق عربي RTL يساعد فرق العمل على تسجيل الحضور، تتبع المصروفات، وحساب نصيب كل شخص من الوجبات المشتركة تلقائياً.",
  openGraph: {
    title: "قطّه — تطبيق سعودي لتنظيم وجبات العمل والحسابات الجماعية",
    description:
      "تطبيق عربي يساعد فرق العمل على تسجيل الحضور، تتبع المصروفات، وحساب نصيب كل شخص من الوجبات المشتركة تلقائياً.",
    type: "article",
  },
};

export default function QattahCaseStudyPage() {
  return <QattahCaseStudy />;
}
