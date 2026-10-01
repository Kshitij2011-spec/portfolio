export interface Project {
  id: string;
  title: string;
  category: string;
  tag: string;
  tagBg: string;
  tagColor: string;
  accentColor: string;
  subtitle: string;
  description: string;
  extendedDescription?: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  docsUrl?: string;
  images: string[];
  metrics?: { label: string; value: string }[];
  highlights?: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

export interface AchievementItem {
  id: string;
  title: string;
  roleOrContext?: string;
  description: string;
  icon: 'trophy' | 'award' | 'zap' | 'academic';
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  skills: { name: string; pastelColor: string }[];
}

export interface PinnedRepo {
  name: string;
  description?: string;
  language: string;
  langColor: string;
  url: string;
  isExternal?: boolean;
  ownershipBadge?: string;
  stars?: number;
  forks?: number;
}
