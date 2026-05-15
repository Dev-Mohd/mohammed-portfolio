"use client";

import { Github, Linkedin, Twitter, Mail, Heart, ArrowUp, Globe } from "lucide-react";
import { motion } from "framer-motion";
import type { Profile } from "@/types";

type FooterProps = {
  profile?: Pick<Profile, "email"> | null;
  socialLinks?: Array<{
    platform: string;
    url: string;
  }>;
};

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case "github":
      return Github;
    case "linkedin":
      return Linkedin;
    case "twitter":
    case "x":
      return Twitter;
    default:
      return Globe;
  }
};

export function Footer({ profile, socialLinks = [] }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    ...socialLinks.map((link) => ({
      icon: getSocialIcon(link.platform),
      href: link.url,
      label: link.platform,
    })),
    ...(profile?.email
      ? [{ icon: Mail, href: `mailto:${profile.email}`, label: "Email" }]
      : []),
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border/50 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg">محمد الشهري</h3>
            <p className="text-sm text-muted-foreground mt-1">
              جميع الحقوق محفوظة © {currentYear}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {footerLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/90 transition-colors"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Made with love */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            صنع بـ <Heart className="w-3 h-3 text-red-500 fill-red-500" /> باستخدام Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
