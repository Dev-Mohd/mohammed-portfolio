import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "قطّه — Dev-Mohd/Qattah-app",
  description:
    "صفحة مشروع قطّه المرتبطة بمستودع Dev-Mohd/Qattah-app على GitHub وصفحة Replit الأصلية.",
  openGraph: {
    title: "قطّه — Dev-Mohd/Qattah-app",
    description:
      "صفحة مشروع قطّه المرتبطة بمستودع Dev-Mohd/Qattah-app على GitHub وصفحة Replit الأصلية.",
    type: "article",
  },
};

export default function QattahCaseStudyPage() {
  redirect("/projects/qattah");
}
