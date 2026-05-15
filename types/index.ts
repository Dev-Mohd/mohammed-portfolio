export interface Profile {
  id: string;
  name: string;
  title: string;
  subtitle?: string | null;
  bio: string;
  email?: string | null;
  phone?: string | null;
  location?: string | null;
  avatar?: string | null;
  resumeUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon?: string | null;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Skill {
  id: string;
  name: string;
  category: string;
  icon?: string | null;
  proficiency: number;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string | null;
  description: string;
  content?: string | null;
  thumbnail?: string | null;
  images: string[];
  tags: string[];
  technologies: string[];
  githubUrl?: string | null;
  liveUrl?: string | null;
  featured: boolean;
  published: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  description?: string | null;
  startDate: Date;
  endDate?: Date | null;
  current: boolean;
  location?: string | null;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  subject?: string | null;
  message: string;
  read: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  name?: string | null;
  email?: string | null;
  image?: string | null;
  role: string;
}
