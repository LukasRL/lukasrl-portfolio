// Tipos para el portafolio - Single Responsibility Principle
export interface Job {
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string | null;
  type?: "mobile" | "web" | "dashboard" | "ecommerce" | "system";
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
}

export interface TechIcon {
  [key: string]: string;
}
