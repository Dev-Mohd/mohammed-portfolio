"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Message } from "@/types";
import {
  Mail,
  MailOpen,
  Trash2,
  Search,
  Clock,
  User,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

export default function AdminMessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "unread" | "read">("all");

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const res = await fetch("/api/messages");
      const data = await res.json();
      setMessages(data);
    } catch {
      console.error("Failed to fetch messages");
    } finally {
      setLoading(false);
    }
  };

  const handleMarkAsRead = async (id: string) => {
    try {
      const res = await fetch(`/api/messages/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: true }),
      });

      if (res.ok) {
        fetchMessages();
      }
    } catch {
      console.error("Failed to mark as read");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("هل أنت متأكد من حذف هذه الرسالة؟")) return;

    try {
      const res = await fetch(`/api/messages/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchMessages();
      }
    } catch {
      console.error("Failed to delete message");
    }
  };

  const filteredMessages = messages.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.email.toLowerCase().includes(search.toLowerCase()) ||
      m.message.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "all" ||
      (filter === "unread" && !m.read) ||
      (filter === "read" && m.read);

    return matchesSearch && matchesFilter;
  });

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
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">الرسائل</h1>
        <p className="text-muted-foreground">إدارة رسائل التواصل</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {[
          {
            label: "إجمالي الرسائل",
            value: messages.length,
            icon: Mail,
            color: "bg-blue-500/10 text-blue-500",
          },
          {
            label: "غير مقروءة",
            value: messages.filter((m) => !m.read).length,
            icon: AlertCircle,
            color: "bg-orange-500/10 text-orange-500",
          },
          {
            label: "مقروءة",
            value: messages.filter((m) => m.read).length,
            icon: CheckCircle,
            color: "bg-green-500/10 text-green-500",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="p-4 rounded-xl bg-card border border-border"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg ${stat.color} flex items-center justify-center`}>
                <stat.icon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="البحث في الرسائل..."
            className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
          />
        </div>
        <div className="flex gap-2">
          {(["all", "unread", "read"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                filter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {f === "all" ? "الكل" : f === "unread" ? "غير مقروءة" : "مقروءة"}
            </button>
          ))}
        </div>
      </div>

      {/* Messages List */}
      <div className="space-y-3">
        {filteredMessages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className={`p-6 rounded-xl border transition-all ${
              !message.read
                ? "bg-primary/5 border-primary/20"
                : "bg-card border-border"
            }`}
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-medium">{message.name}</h3>
                    {!message.read && (
                      <span className="w-2 h-2 rounded-full bg-primary" />
                    )}
                  </div>
                  <a
                    href={`mailto:${message.email}`}
                    className="text-sm text-primary hover:underline"
                  >
                    {message.email}
                  </a>
                  {message.subject && (
                    <p className="text-sm font-medium mt-2">{message.subject}</p>
                  )}
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                    {message.message}
                  </p>
                  <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    {new Date(message.createdAt).toLocaleString("ar-SA")}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {!message.read && (
                  <button
                    onClick={() => handleMarkAsRead(message.id)}
                    className="p-2 rounded-lg hover:bg-primary/10 text-primary transition-colors"
                    title="تحديد كمقروءة"
                  >
                    <MailOpen className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={() => handleDelete(message.id)}
                  className="p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition-colors"
                  title="حذف"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}

        {filteredMessages.length === 0 && (
          <div className="text-center py-12 text-muted-foreground">
            <Mail className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>لا توجد رسائل</p>
          </div>
        )}
      </div>
    </div>
  );
}
