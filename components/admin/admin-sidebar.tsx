"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FolderKanban,
  Wrench,
  User,
  MessageSquare,
  LogOut,
  Code2,
} from "lucide-react";

export function AdminSidebar() {
  const pathname = usePathname();
  const t = useTranslations("admin");

  const navItems = [
    { href: "/admin/dashboard", icon: LayoutDashboard, label: t("dashboard") },
    { href: "/admin/projects", icon: FolderKanban, label: t("projects") },
    { href: "/admin/skills", icon: Wrench, label: t("skills") },
    { href: "/admin/profile", icon: User, label: t("profile") },
    { href: "/admin/messages", icon: MessageSquare, label: t("messages") },
  ];

  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <aside className="w-64 bg-card border-l border-border flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
            <Code2 className="w-5 h-5 text-primary-foreground" />
          </div>
          <div>
            <h2 className="font-semibold">لوحة التحكم</h2>
            <p className="text-xs text-muted-foreground">محمد الشهري</p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
              isActive(item.href)
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            <item.icon className="w-5 h-5" />
            {item.label}
            {isActive(item.href) && (
              <motion.div
                layoutId="sidebar-indicator"
                className="absolute right-0 w-1 h-8 bg-primary rounded-l-full"
              />
            )}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-border">
        <button
          onClick={() => signOut({ callbackUrl: "/admin/login" })}
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-500/10 transition-all w-full"
        >
          <LogOut className="w-5 h-5" />
          {t("logout")}
        </button>
      </div>
    </aside>
  );
}
