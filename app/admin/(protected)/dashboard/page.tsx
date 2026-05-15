"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  FolderKanban,
  Wrench,
  MessageSquare,
  Eye,
  TrendingUp,
  Clock,
} from "lucide-react";

interface Stats {
  totalProjects: number;
  totalSkills: number;
  unreadMessages: number;
  recentMessages: any[];
}

export default function AdminDashboardPage() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [loading, setLoading] = useState(true);
  const t = useTranslations("admin");

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const [projectsRes, skillsRes, messagesRes] = await Promise.all([
        fetch("/api/projects"),
        fetch("/api/skills"),
        fetch("/api/messages"),
      ]);

      const projects = await projectsRes.json();
      const skills = await skillsRes.json();
      const messages = await messagesRes.json();

      setStats({
        totalProjects: projects.length,
        totalSkills: skills.length,
        unreadMessages: messages.filter((m: any) => !m.read).length,
        recentMessages: messages.slice(0, 5),
      });
    } catch {
      console.error("Failed to fetch stats");
    } finally {
      setLoading(false);
    }
  };

  const statCards = [
    {
      title: t("totalProjects"),
      value: stats?.totalProjects || 0,
      icon: FolderKanban,
      color: "bg-blue-500/10 text-blue-500",
      href: "/admin/projects",
    },
    {
      title: t("totalSkills"),
      value: stats?.totalSkills || 0,
      icon: Wrench,
      color: "bg-green-500/10 text-green-500",
      href: "/admin/skills",
    },
    {
      title: t("unreadMessages"),
      value: stats?.unreadMessages || 0,
      icon: MessageSquare,
      color: "bg-orange-500/10 text-orange-500",
      href: "/admin/messages",
    },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full"
        />
      </div>
    );
  }

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-2">{t("welcome")}</h1>
        <p className="text-muted-foreground mb-8">نظرة عامة على موقعك</p>
      </motion.div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {statCards.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={stat.href}>
              <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <TrendingUp className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.title}</div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Recent Messages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-2xl bg-card border border-border p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">{t("recentMessages")}</h2>
          <Link
            href="/admin/messages"
            className="text-sm text-primary hover:text-primary/80 transition-colors"
          >
            عرض الكل
          </Link>
        </div>

        {stats?.recentMessages.length === 0 ? (
          <div className="text-center py-8 text-muted-foreground">
            لا توجد رسائل بعد
          </div>
        ) : (
          <div className="space-y-4">
            {stats?.recentMessages.map((message: any) => (
              <div
                key={message.id}
                className={`flex items-start gap-4 p-4 rounded-xl ${
                  !message.read ? "bg-primary/5 border border-primary/20" : "bg-muted/50"
                }`}
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-medium text-primary">
                    {message.name[0]}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium">{message.name}</span>
                    {!message.read && (
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {message.message}
                  </p>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {new Date(message.createdAt).toLocaleDateString("ar-SA")}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
