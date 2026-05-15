"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Profile, SocialLink } from "@/types";
import {
  Save,
  Plus,
  Trash2,
  User,
  Mail,
  MapPin,
  Phone,
  FileText,
  Globe,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

export default function AdminProfilePage() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    title: "",
    subtitle: "",
    bio: "",
    email: "",
    phone: "",
    location: "",
    resumeUrl: "",
  });
  const [newSocial, setNewSocial] = useState({ platform: "", url: "" });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [profileRes, socialRes] = await Promise.all([
        fetch("/api/profile"),
        fetch("/api/social-links"),
      ]);

      const profileData = await profileRes.json();
      const socialData = await socialRes.json();

      if (profileData) {
        setProfile(profileData);
        setFormData({
          name: profileData.name || "",
          title: profileData.title || "",
          subtitle: profileData.subtitle || "",
          bio: profileData.bio || "",
          email: profileData.email || "",
          phone: profileData.phone || "",
          location: profileData.location || "",
          resumeUrl: profileData.resumeUrl || "",
        });
      }

      setSocialLinks(socialData || []);
    } catch {
      console.error("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, id: profile?.id || "1" }),
      });

      if (res.ok) {
        // Show success toast
      }
    } catch {
      console.error("Failed to save profile");
    } finally {
      setSaving(false);
    }
  };

  const handleAddSocial = async () => {
    if (!newSocial.platform || !newSocial.url) return;

    try {
      const res = await fetch("/api/social-links", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newSocial),
      });

      if (res.ok) {
        setNewSocial({ platform: "", url: "" });
        fetchData();
      }
    } catch {
      console.error("Failed to add social link");
    }
  };

  const handleDeleteSocial = async (id: string) => {
    try {
      const res = await fetch(`/api/social-links/${id}`, { method: "DELETE" });
      if (res.ok) {
        fetchData();
      }
    } catch {
      console.error("Failed to delete social link");
    }
  };

  const getSocialIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "github": return Github;
      case "linkedin": return Linkedin;
      case "twitter": return Twitter;
      default: return Globe;
    }
  };

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
        <h1 className="text-3xl font-bold mb-2">الملف الشخصي</h1>
        <p className="text-muted-foreground">إدارة معلوماتك الشخصية وروابط التواصل</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Profile Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6 rounded-2xl bg-card border border-border"
        >
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <User className="w-5 h-5 text-primary" />
            المعلومات الأساسية
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">الاسم الكامل</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">المسمى الوظيفي</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">العنوان الفرعي (بالإنجليزي)</label>
              <input
                type="text"
                value={formData.subtitle}
                onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">النبذة الشخصية</label>
              <textarea
                value={formData.bio}
                onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                الموقع
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                رابط السيرة الذاتية
              </label>
              <input
                type="url"
                value={formData.resumeUrl}
                onChange={(e) => setFormData({ ...formData, resumeUrl: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>

            <button
              onClick={handleSave}
              disabled={saving}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all disabled:opacity-50"
            >
              {saving ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                />
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  حفظ التغييرات
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="p-6 rounded-2xl bg-card border border-border"
        >
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Globe className="w-5 h-5 text-primary" />
            روابط التواصل
          </h2>

          {/* Add New Social Link */}
          <div className="flex gap-3 mb-6">
            <input
              type="text"
              value={newSocial.platform}
              onChange={(e) => setNewSocial({ ...newSocial, platform: e.target.value })}
              placeholder="المنصة (GitHub, LinkedIn...)"
              className="flex-1 px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
            <input
              type="url"
              value={newSocial.url}
              onChange={(e) => setNewSocial({ ...newSocial, url: e.target.value })}
              placeholder="الرابط"
              className="flex-1 px-4 py-3 rounded-xl bg-muted border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
            />
            <button
              onClick={handleAddSocial}
              className="px-4 py-3 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all"
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>

          {/* Social Links List */}
          <div className="space-y-3">
            {socialLinks.map((link) => {
              const Icon = getSocialIcon(link.platform);
              return (
                <div
                  key={link.id}
                  className="flex items-center gap-4 p-4 rounded-xl bg-muted group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium">{link.platform}</h3>
                    <p className="text-sm text-muted-foreground truncate">{link.url}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteSocial(link.id)}
                    className="p-2 rounded-lg hover:bg-red-500/10 text-red-500 transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
